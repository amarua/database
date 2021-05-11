import React from 'react';

class LogIn extends React.Component<{confirm:any},any>{
  constructor(props:any){
    super(props)
    this.state={
      password:'',
      islogin:false,
      name:''
    }
  }
  passHandle=(event:any)=> {
    this.setState({
      password:event.target.value
    })
  }

  confirm=()=>{
    if(this.state.password==='amar'){
      this.props.confirm();
    }
  }

  welcome = (event:any)=>{
    this.setState({name:event.target.value})
  }
  render(){
    return (
      <React.Fragment>
        <form onSubmit={(event) =>{event.preventDefault()}}>
          <input type="text" placeholder="Enter the Password" onChange={this.passHandle}></input>
          <button type="submit" onClick={this.confirm}>Submit</button>
        </form>
      </React.Fragment>
    );
  }
};

export default LogIn;
