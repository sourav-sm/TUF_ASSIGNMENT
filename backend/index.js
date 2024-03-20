const express=require('express');
const mysql = require('mysql2');
const app=express();
const port=process.env.PORT || 5000;
const cors=require("cors");

require('dotenv').config()
// require('dotenv').config()

//  CREATING DB
const db=mysql.createConnection({
  // host:'localhost',
  // user:'root',
  // password:'sourav123',
  // database:'submission_db'
  host:process.env.DB_host,
  user:process.env.DB_user,
  password:process.env.DB_password,
  database:process.env.DB_database
})
// const db = mysql.createConnection({
//   host: process.env.DB_host,
//   user: process.env.DB_user,
//   password: process.env.DB_password,
//   database: process.env.DB_database
// });


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('express app is running');
});

// let submissions=[];

app.post('/submit',(req,res)=>{
    try{
    const { username, codeLanguage, stdin, sourceCode  } = req.body;

    //validation for required fields
    if (!username || !codeLanguage || !stdin || !sourceCode) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    //timestamp part
    const timestamp=new Date().toISOString().slice(0,19).replace('T',' ');
  db.query('INSERT INTO submissions (username, codeLanguage, stdin, timestamp,sourceCode) VALUES(?,?,?,?,?)',
  [username, codeLanguage, stdin, timestamp,sourceCode],
  (error,results)=>{
    if(error){
      console.log('error in submisition data in db',error);
      return res.status(500).json({message:'error in submitting data in db'});
    }
    res.status(201).json({message:'successfullly submited'})
  }); 
 
}catch(error){
  console.error('error in submit',error);
  res.status(500).json({message:'internal server error'});
}
});

  
app.get('/submissions', (req, res) => {
  db.query('SELECT * FROM submissions', (error, results) => {
    if (error) {
      console.error('Error fetching submissions:', error);
      return res.status(500).json({ message: 'Error fetching submissions' });
    }
    res.json(results);
  });
});

app.listen(port,()=>console.log(`Server is running on port ${port}`));