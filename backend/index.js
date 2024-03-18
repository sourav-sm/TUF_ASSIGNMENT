const express=require('express');
const app=express();
const port=5000;
const cors=require("cors");

app.use(express.json());
app.use(cors());

let submissions=[];

app.post('/submit',(req,res)=>{
    try{
    const { username, codeLanguage, stdin, sourceCode } = req.body;

    //validation for required fields
    if (!username || !codeLanguage || !stdin || !sourceCode) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    //timestamp part
    const timestamp=new Date().toISOString();

    //push details to ans array
    submissions.push({
        username,
        codeLanguage,
        stdin,
        sourceCode,
        // timestamp
    });

    res.status(201).json({message:'Submission received'});
     } catch(error){
        console.log("error in submit",error);
     }
})
app.get('/', (req, res) => {
    res.send('Welcome to the submission server');
  });
  
//route for submissions
app.get('/submissions',(req,res)=>{
    res.json(submissions);
})

app.listen(port,()=>console.log(`Server is running on port ${port}`));