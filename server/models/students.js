import mongoose from 'mongoose';

const Userschema = mongoose.Schema({
    fname:String,
    rollno:String,
    email:String,
    contact:String,
    year_of_graduation:String,
    department:String,
    section:String,
    password:String,
    selectedFile:String
})

const Usermodel = mongoose.model('Usermodel',Userschema);
export default Usermodel;