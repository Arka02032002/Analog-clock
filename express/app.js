const express=require('express');
const path = require('path');
const app=express();
const port =80;

app.use('/static',express.static('static'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./code/index.html'));
});

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
});