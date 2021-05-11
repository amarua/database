import * as mysql from 'mysql';
import config from '../db/config';
const connection = mysql.createConnection(config.mysql)
connection.connect(err =>{
  if(err){
    console.log(err.message);
  }else{
    console.log('successfully connected');
  }
})
export default connection;
