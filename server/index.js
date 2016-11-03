import express from 'express';

let app = express();

app.get('/*',(req,res)=>{
  res.send('Welcome to login');
});

app.listen(3000,() => console.log("running on port 3000"))
