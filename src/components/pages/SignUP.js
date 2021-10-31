import React , { useRef} from 'react';
import '../../App.css';

export default function SignUP() {
  
    
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            
            email: emailRef.current.value,
            password: passwordRef.current.value,

        }
    }

    return (
        <div  className="container">
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit} className="form">
               
              
                <label for="email">Email</label>
                <input 
                type="email" 
                name="email"
                id="email"
                className="email"
                placeholder="example@corp.com"
                ref={emailRef}
                tabindex="3" 
                />
                <label for="email">Password</label>
                <input 
                type="password" 
                name="password"
                id="password"
                className="password"
                placeholder="password"
                ref={emailRef}
                tabindex="3" 
                />


               
                <button type="submit" className="send">Submit</button>
            </form>
        </div>
    )
};

