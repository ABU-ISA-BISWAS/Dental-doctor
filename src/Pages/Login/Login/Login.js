import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle,useSendPasswordResetEmail, useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
     

      const [signInWithGoogle] = useSignInWithGoogle(auth);
    const emailRef = useRef({});

    const passwordlRef = useRef({});
    const navigate =useNavigate();

    const handleSubmit =event =>{
        event.preventDefault();
        const email =emailRef.current.value;
        const password=passwordlRef.current.value;
        signInWithEmailAndPassword(email,password);
    }
    if(user){
        navigate(from, { replace: true });
    }

 

    const navigateRegister =event=>{
        navigate('/register');
    }
    const [sendPasswordResetEmail, sending, sendPasserror] = useSendPasswordResetEmail(auth);
    const  handleSetPasswordReset =()=>{
      const email =emailRef.current.value;
      
      sendPasswordResetEmail(email);
      toast('Sent reset password link');
    }
    return (
        <div className='container w-50 mx-auto'>
           <h2 className='text-primary text-center mt-4'>Please Login</h2> 
           <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordlRef} type="password" placeholder="Password" required />
  </Form.Group>
  
  
  <Button variant="primary" type="submit">
    Login
  </Button>
  
</Form>
  {
    error ? 
    <p className='text-danger mt-2'>The email or password  that you've entered is incorrect!!!</p>
    :
    <> </>
  }

    <p className='mt-2'> New to Dental ? <span className='please-register text-danger ' onClick={navigateRegister}>Please Register</span></p>
    <p> Forgot Password ? <span className='please-register text-danger' onClick={handleSetPasswordReset}>Reset password</span></p>

    
    <button className='google-signin' onClick={() => signInWithGoogle()}>SignIn with google</button>

    
      <ToastContainer/>
        </div>
    );
};

export default Login;<h2>please login</h2>