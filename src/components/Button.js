import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <div>
    <Link to='Output1Section'>

     
      <div id="output">Original text</div>
      <button className='btn' onClick='myFunction()'>Submit</button>
    </Link>
    </div>
    
  );
  function getMyOutput(){
    if(document.getElementById("output")){
      console.log("here");
      document.getElementById("output").innerHTML = "hello world";
    }
}

// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

// const SIZES = ['btn--medium', 'btn--large'];

// export const Button = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize
// }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//   return (
//     <div>
//     <Link to='/DNA' className='btn-mobile'>
//       <button
//         className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//         onClick={Submit}
//         type={"submit"}
//       >
//         {children}
//       </button>
//    </Link>
// </div>

   
//   );
// };
}