import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import {  useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      
      
      const SendEmailVerification = () => {
        const [email, setEmail] = useState('');
        const [sendEmailVerification, sending, error] = useSendEmailVerification(
          auth
        );}
        
    const navigate= useNavigate();

    const navigateLogin =event=>{
        navigate('/login');
    }
    const handleRegister =event =>{
        event.preventDefault();
        const name =event.target.name.value;
        const email =event.target.email.value;
        const password =event.target.password.value;

        createUserWithEmailAndPassword(email,password);
        sendEmailVerification();
        toast('Sent verification email');
       
    }
    if(user){
        navigate('/home');
    };
    
    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your name' />
                <input type="email" name='email' placeholder='Your email' />
                <input type="password" name='password' placeholder='password' />
                <input type="submit" value="Register" />
            </form>
            
        
     
            <p className='text-center'>Already have an account ? <span className='please-register text-danger' onClick={navigateLogin}>Please Login</span></p>
            <ToastContainer/>
        </div>
    );
};

export default Register;