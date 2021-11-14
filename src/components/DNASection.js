import React from 'react';
import '../App.css';
import { Button } from './Button';
// import  DNASection from './components/DNASection';
import './DNASection.css';

function DNASection() {
  return (
    <div className='DNA-container'>
      <img src='/images/dna1.jpg'  />
      <h1>Enter Strands </h1>
      <form>

<div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">No. of strings</label>
          <input type="text" class="N" id="name" placeholder="No. of strings" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputEmail4">Length of string (k)</label>
          <input type="text" class="K" id="name" placeholder="length of the string" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputEmail4">String1</label>
          <input type="text" class="string1" id="name" placeholder="string1" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputEmail4">String2</label>
          <input type="text" class="string2" id="name" placeholder="string2" />
        </div>
       
      </div>




    <button type="submit" class="btn btn-primary">Submit</button>
    </form>

      
     
      
    </div>
  );
}
    
    export default DNASection;




