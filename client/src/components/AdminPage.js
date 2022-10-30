import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Card,Button,Dialog,DialogContent,MenuItem,Select,FormControl,InputLabel,Typography,TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AdminPage() {
  
    axios.defaults.withCredentials = true;

     const [isopen,setIsopen] = useState(false)
     const [isopenevent,setIsopenevent] = useState(false)
     const [isopenstudent,setIsopenstudent] = useState(false)
     const [isopenview,setIsopenview] = useState(false)
     const [specificobj,setSpecificobj] = useState({})
     const [events,setEvents]=useState([{
          name:'',
          time_of_conduct:'',
          date_of_conduct:'',
          conductedby:'',
          place_of_conduct:'',
          description:'',
          selectedFile:''
     }])

     const [eventdata,setEventdata]=useState([{
          name:'',
          time_of_conduct:'',
          date_of_conduct:'',
          conductedby:'',
          place_of_conduct:'',
          description:'',
          selectedFile:''
     }])

     const [students,setStudents]=useState([{
            fname:'',
            rollno:'',
            email:'',
            contact:'',
            year_of_graduation:'',
            department:'',
            section:'',
            password:'',
            selectedFile:''
     }])

       function handleChangeEvent(e){
            
            const {name,value}=e.target;
            setEvents((prev)=>{
                return(
                    {...prev,[name]:value}
                )
            })
  
       }

       function handleChangeStudent(e){
            
            const {name,value}=e.target;
            setStudents((prev)=>{
                return(
                    {...prev,[name]:value}
                )
            })
  
       }

       function handleChangeobj(e){
            
            const {name,value}=e.target;
            setSpecificobj((prev)=>{
                return(
                    {...prev,[name]:value}
                )
            })
  
       }
    

       function handleClickUpdate(e){
            const eventname = e.target.name;
            eventdata.map(event=>{
                if(event.name === eventname){
                    setIsopen(true)
                    setSpecificobj(event)
                }
            })
        }

        function handleClickview(e){
            const eventname = e.target.name;
            eventdata.map(event=>{
                if(event.name === eventname){
                    setIsopenview(true)
                    setSpecificobj(event)
                }
            })
        }
       
       function handleClickevent(){
           axios.post("http://localhost:5000/eventregister",{name:events.name,time_of_conduct:events.time_of_conduct,date_of_conduct:events.date_of_conduct,conductedby:events.conductedby,place_of_conduct:events.place_of_conduct,description:events.description,selectedFile:events.selectedFile})
           
       }

       function handleClickstudent(){
           axios.post("http://localhost:5000/studentregister",{fname:students.fname,rollno:students.rollno,email:students.email,contact:students.contact,year_of_graduation:students.year_of_graduation,department:students.department,section:students.section,password:students.password,selectedFile:events.selectedFile})
           .then((response)=>{
                console.log(response.data.message);
            })
       }

       function handleClickUpdateSubmit(){
            axios.post("http://localhost:5000/eventupdate",{name:specificobj.name,time_of_conduct:specificobj.time_of_conduct,date_of_conduct:specificobj.date_of_conduct,conductedby:specificobj.conductedby,place_of_conduct:specificobj.place_of_conduct,description:specificobj.description,selectedFile:specificobj.selectedFile})
       }

        useEffect(()=>{
                axios.get('http://localhost:5000/eventdata')
                .then((response)=>{
                    setEventdata(response.data);
                })
            },[])

  return (
    <>
    
     <Button variant='contained' onClick={()=>setIsopenevent(true)} sx={{marginLeft:'930px',marginTop:'25px'}}>+ Add Event</Button>
     <Button variant='contained' onClick={()=>setIsopenstudent(true)} sx={{marginLeft:'20px',marginTop:'25px'}}>+ Add Student</Button>

     <Dialog  open={isopenevent}>
            <DialogContent  sx={{width:'500px'}}>
                  
                  <Typography  variant='h6'sx={{paddingLeft:'220px',paddingBottom:'15px'}}>
                       Event
                  </Typography>

                  <TextField name='name' value={events.name} onChange={handleChangeEvent} label='Name' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>
                  
                  <TextField name='time_of_conduct' value={events.time_of_conduct} onChange={handleChangeEvent} label='Time of Conduct' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>
                  
                  <TextField name='conductedby' value={events.conductedby} onChange={handleChangeEvent} label='Conducted by' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>
                  
                  <TextField name='place_of_conduct' value={events.place_of_conduct} onChange={handleChangeEvent} label='Place of Conduct' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>

                  <TextField name='description' value={events.description} onChange={handleChangeEvent} label='Description' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>

                  <Button variant='contained' onClick={()=>{setIsopenevent(false)}} sx={{marginLeft:'100px',marginTop:'15px'}} >Close</Button>
                  <Button variant='contained' onClick={handleClickevent} sx={{marginLeft:'50px',marginTop:'15px'}} >Submit</Button>

            </DialogContent>
         </Dialog>

         <Dialog scroll='body' open={isopenstudent}>
            <DialogContent sx={{width:'500px'}}>
                  
                  <Typography variant='h6'sx={{paddingLeft:'220px',paddingBottom:'15px'}}>
                       Student
                  </Typography>

                  <TextField name='fname' value={students.fname} onChange={handleChangeStudent} label='Full Name' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>
                  
                  <TextField name='rollno' value={students.rollno} onChange={handleChangeStudent} label='Roll Number' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>
                  
                  <TextField  name='email' value={students.email} onChange={handleChangeStudent}  label='Email' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>
                  
                  <TextField  name='contact' value={students.contact} onChange={handleChangeStudent}  label='Mobile' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>

                  <TextField  name='department' value={students.department} onChange={handleChangeStudent}  label='Department' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>

                  <TextField   name='section' value={students.section} onChange={handleChangeStudent} label='Section' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>

                  <TextField  name='year_of_graduation' value={students.year_of_graduation} onChange={handleChangeStudent}  label='Year of Graduation' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>

                  <Button variant='contained' onClick={()=>{setIsopenstudent(false)}} sx={{marginLeft:'100px',marginTop:'15px'}} >Close</Button>
                  <Button variant='contained' onClick={handleClickstudent} sx={{marginLeft:'50px',marginTop:'15px'}} >Submit</Button>

            </DialogContent>
         </Dialog>
     <div style={{overflow:'scroll',height:'470px'}}>

        <Dialog  open={isopen}>
            <DialogContent  sx={{width:'500px'}}>
                  
                  <Typography  variant='h6'sx={{paddingLeft:'220px',paddingBottom:'15px'}}>
                       Event
                  </Typography>

                  <TextField name='name' value={specificobj.name} onChange={handleChangeobj} label='Name' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>
                  
                  <TextField name='time_of_conduct' value={specificobj.time_of_conduct} onChange={handleChangeobj} label='Time of Conduct' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>
                  
                  <TextField name='conductedby' value={specificobj.conductedby} onChange={handleChangeobj} label='Conducted by' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>
                  
                  <TextField name='place_of_conduct' value={specificobj.place_of_conduct} onChange={handleChangeobj} label='Place of Conduct' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>

                  <TextField name='description' value={specificobj.description} onChange={handleChangeobj} label='Description' sx={{marginLeft:'50px',marginTop:'15px',width:'400px'}}>
                  </TextField>

                  <Button variant='contained' onClick={()=>{setIsopen(false)}} sx={{marginLeft:'100px',marginTop:'15px'}} >Close</Button>
                  <Button variant='contained' onClick={handleClickUpdateSubmit} sx={{marginLeft:'50px',marginTop:'15px'}} >Submit</Button>

            </DialogContent>
         </Dialog>


        <Dialog open={isopenview} >
                <DialogContent sx={{width:'300px'}}>
                     <h3 style={{marginLeft:'30px'}}>Name : {" "+specificobj.name}</h3>
                     <h3 style={{marginLeft:'30px'}}>Time of Conduct : {" "+specificobj.time_of_conduct}</h3> 
                     <h3 style={{marginLeft:'30px'}}>Date of Conduct : {" "+specificobj.date_of_conduct}</h3>
                     <h3 style={{marginLeft:'30px'}}>Conducted by : {" "+specificobj.conductedby}</h3>
                     <h3 style={{marginLeft:'30px'}}>Place of Conduct : {" "+specificobj.place_of_conduct}</h3>
                     <h3 style={{marginLeft:'30px'}}>Description : {" "+specificobj.description}</h3>
                <Button variant='contained' onClick={()=>{setIsopenview(false)}}  sx={{marginLeft:'120px'}}>Close</Button>
              </DialogContent>
        </Dialog> 
        {
          eventdata.map((event)=>
            (
              <>
                      <Card elevation={5} sx={{height:'75px',width:'900px',marginLeft:'280px',marginTop:'30px',display:'flex',flexDirection:'row'}}>
                          <AccountCircleIcon sx={{fontSize:'35px',marginLeft:'10px',marginTop:'20px'}}/>
                          <h3 style={{marginLeft:'30px',marginTop:'27px',color:'#253053',width:'250px'}}>{event.name}</h3> 
                           <Button name={event.name} onClick={handleClickUpdate} variant='contained' sx={{height:'35px',width:'100px',marginTop:'20px',marginLeft:'300px'}}>Update</Button> 
                          <Button name={event.name} onClick={handleClickview} variant='contained' sx={{height:'35px',width:'100px',marginTop:'20px',marginLeft:'30px'}}>View</Button> 
                      </Card>
              </>
            ))
          }


      </div>
    </>
  )
}

export default AdminPage