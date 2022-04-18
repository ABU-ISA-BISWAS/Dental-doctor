import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
          <h3 className='text-primary fw-bolder'>Make your <span className='text-danger fs-2'>Dental</span> Experience a Lot Brighter</h3>
            <p className='text-danger fw-bold'>
            With best facilities and better equipments,you are in safe hands.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 className='text-primary fw-bolder '>From Simple Procedures to complex Surgeries</h3>
            <p className='text-danger fw-bold'>With best facilities and better equipments,you are in safe hands.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            
            <h3 className='text-primary fw-bolder'>Expertise in major dental procedures</h3>
            <p className='text-danger fw-bold'>Oral Examinations,Root Canals,Crowns and Caps</p>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};


export default Banner;