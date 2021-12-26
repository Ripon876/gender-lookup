import React,{useState,useRef} from "react";
import axios from "axios";
import {Container,Button,TextField} from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Navbar from  './Navbar'
import "./loader.css";
function App() {


const inputVal = useRef(null);
const [gender,setGender] = useState("");
const [loader,setLoader] = useState(false);
const [errorStatus,setErrorStatus] = useState(false);


const getQuery = async function(){
const name = inputVal.current.children[1].children[0].value;
inputVal.current.children[1].children[0].value = '';


if(!name){
  alert("please insert a name to lookup gender");
}else{
  setErrorStatus(false);
  setLoader(true);
  if(gender){
    setGender("")
  }
   await axios.get(`https://api.genderize.io/?name=${name}`)
  .then(function(res){
    setLoader(false);
    if(res.data.gender === null){
      setErrorStatus(true);
    }else{
      setGender(res.data.gender);
    }
    
  })
  .catch(function(error) {
      console.log(error)
      if(error){
        alert("something went wrong")
      }

  })

}
} 
 



  return ( 
<div>

<Navbar />

<Container maxWidth="sm" style={{ textAlign: "center",marginTop: "100px"}}>
  <h1>Check Gender By Name</h1>
  <TextField ref={inputVal} label="Name" />
<Container sx={{ mt: 3 }}>
<Button onClick={getQuery} variant="contained" style={{ backgroundColor: '#2E3B55' }}>Check</Button>
</Container>


 <h1  className="mes" >{ loader && <AutorenewIcon className="rotating" fontSize="large" /> }</h1>
 

{ gender && <> <h1 className="mes" style={{marginBottom: 0}}><SentimentSatisfiedAltIcon fontSize="large" /> </h1>
 <h1 style={{marginTop: 0}} >{gender.toUpperCase()}</h1>
 </>
}
 
{errorStatus && <>  <h1 className="mes" style={{marginBottom: 0}}><SentimentVeryDissatisfiedIcon fontSize="large" /> </h1>
 <h1 style={{marginTop: 0}}> Not Found</h1>  </>}
   
</Container>

   


</div>
  
  )
}

export default App;
