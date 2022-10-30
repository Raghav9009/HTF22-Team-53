import mongoose from 'mongoose';

const Eventschema = mongoose.Schema({
    name:String,
    time_of_conduct:String,
    date_of_conduct:String,
    conductedby:String,
    place_of_conduct:String,
    description:String,
    selectedFile:String
})

const Eventmodel = mongoose.model('Eventmodel',Eventschema);
export default Eventmodel;