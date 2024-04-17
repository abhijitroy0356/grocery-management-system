import mysql from 'mysql'
const con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"marketms"
})

con.connect((err)=>{
    if(err){
        console.log("not connected")
    }
    else{
        console.log("connected")
    }
})

export default con