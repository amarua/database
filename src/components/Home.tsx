import React from 'react';
import DateBaseHandler from './DateBaseHandler';
import Login from './Login';

class Home extends React.Component<{},any>{
  constructor(props:any){
    super(props);
    this.state={
      islogin:false,
      name:''
    }
  }

  confirm= ()=>{
    this.setState({
      islogin:true
    })
  }
  printname= (event:any)=>{
    this.setState({name:event.target.value.toUpperCase()})
  }
  render(){
    return (
      <div className="handler">
        <h3>Welcome {this.state.name===''?"Stranger":this.state.name}</h3>
        <input type="text" onChange={this.printname} value={this.state.name} placeholder="Enter Name if you want"></input>
        {!this.state.islogin?<Login confirm={this.confirm}/>:<DateBaseHandler/>}
      </div>
    );
  }
}


export default Home;
