import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Student from './models/students.js';
import Event from './models/events.js'

const app=express();  

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    credentials:true
}));  
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));


const CONNECTION_URL = 'mongodb+srv://Raghav:goldmanraghav@cluster0.rgdekx9.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;


app.post('/eventregister',(req,res)=>{
    
      const newEvent = new Event(req.body);
      newEvent.save();
})

app.post('/studentregister',(req,res)=>{
    
      const newStudent = new Student(req.body);
      newStudent.save();
})

app.get('/eventdata',async(req,res)=>{ 
    try {
         await Event.find().then(foundEvents => res.json(foundEvents))
    } catch (error) {
        res.status(401).json({message:error.message}) 
    }
})

app.post('/eventupdate',async(req,res)=>{
    const name=req.body.name;
    console.log(req.body)
    let doc = await Event.findOneAndUpdate({name:name},req.body);
})

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=> app.listen(PORT,()=>console.log('Server is running at port 5000')))
        .catch((error)=>console.log(error.message));