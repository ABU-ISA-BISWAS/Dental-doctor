import React from 'react';
import Doctor from '../../Doctor/Doctor';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Doctor></Doctor>
            
        </>
    );
};

export default Home;