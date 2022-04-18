import React from 'react';

const Doctor = () => {
    return (
        <div id='dentist'>
            <div className='d-flex mt-5 p-2 bg-info'>
                <div><img style={{"margin-right":'10px'}} className='rounded' src="https://i.ibb.co/vhhSnQY/doctor1.jpg" alt="" /></div>
                <div style={{"margin-top":'50px'}}>
                    <h1 className='fs-2 text-dark'>Dr.Anagha Menen <span className='fs-6 text-danger'>M.D, pH.D</span></h1>
                <p className='fs-3 ' >MBBS,BDS , MDS - Periodontology and Oral Implantology, 16 Years Experience</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;