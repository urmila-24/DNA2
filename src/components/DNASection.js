import React ,{useState} from 'react';

import '../App.css';
// eslint-disable-next-line
import { Button } from './Button';
import './DNASection.css';

function DNASection() {

  const[string,setString] =useState({N:'' ,K:''});


  //function call when we enter n,k 
  //details =function now temporary fun.name
const String = details =>{
  console.log("details");
}

  return (
    <div className='DNA-container'>
      <img src='/images/dna1.jpg'  />
      
      <h1>Enter Strands </h1>

      <form action="/submit">

      



<div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">No. of strings</label>
          <input type="text" class="N" id="name" placeholder="No. of strings" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputEmail4">Length of string (k)</label>
          <input type="text" class="K" id="name" placeholder="length of the string" />
        </div>
        
       
      </div>




    <button type="submit" class="btn btn-primary"> Submit</button>
   

    
  
    </form>
      <form action="/submit">
  

  <input type="submit" value="Submit"/>

</form>
     
      
    </div>
  );
}
    
    export default DNASection;




