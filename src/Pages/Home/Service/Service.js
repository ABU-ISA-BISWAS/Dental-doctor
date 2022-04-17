import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id,name,img,description,price}=service;
    const navigate=useNavigate();
    const navigateToServiceDetail=id=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p className='fs-4'>Price:${price}</p>
            <p><small>{description}</small></p>
            <Link to="/checkout">
            <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-primary'>{name}</button>
            </Link>
            
        </div>
    );
};

export default Service;