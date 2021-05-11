import React from 'react';
import connection from '../db/connection';
let list=Array();

class DateBaseHandler extends React.Component<{},any>{
  constructor(props:any){
    super(props)
    this.state={
      btncolor:"red",
      list:Array()
    }
  }
  componentDidMount(){

  }
  runquery = (query:string) => {
    return new Promise((resolve,reject) => {
      const sql = query;
        connection.query(sql, function (err, result) {
          if (err){
            console.log(err.message);
            reject(err.message);
          }
          for (let i = 0; i < result.length;i++){
            list.push(result[i]);
          }
          console.log("Result: " + result);
          resolve('success');
        });
  })}
  getdata = async ()=>{
    console.log("click on getdata")
      await this.runquery("SELECT * FROM emp");
      this.setState({list:list})
  }

  render(){
    return (
      <React.Fragment>
        <div><h5>Loged in {list.length}</h5></div>
        <button onClick={this.getdata} ref="btn" style={{color:this.state.btncolor}}>Click to get data</button>
        <table className="table table-dark mt-5">
          {list.map((item) => (
            <tbody key={item["ENAME"]}>
              <tr>
              <td>{item["ENAME"]}</td>
              <td>{item["JOB"]}</td>
              <td>{item["SAL"]}</td>
              <td>{item["COMM"]}</td>
            </tr>
            </tbody>
          ))}
        </table>
      </React.Fragment>
    );
  }
}

export default DateBaseHandler;
