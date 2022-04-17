import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';
const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
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
    return (
        <div className='container w-50 mx-auto'>
           <h2 className='text-primary text-center mt-4'>please login</h2> 
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
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  
</Form>
    <p> New to Dental ? <span className='please-register text-danger' onClick={navigateRegister}>Please Register</span></p>
        </div>
    );
};

export default Login;<h2>please login</h2>