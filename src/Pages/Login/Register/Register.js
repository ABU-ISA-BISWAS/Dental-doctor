import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

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
        </div>
    );
};

export default Register;