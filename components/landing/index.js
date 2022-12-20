import React from 'react';
import About from './about';
import Navbar from './navbar';
import Portfolio from './portfolio';

function LandingPage(props) {
    return (
        <div>
            <Navbar/>
            <About/>
            <Portfolio/>
            
        </div>
    );
}

export default LandingPage;