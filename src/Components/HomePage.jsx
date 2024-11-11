
import React from 'react';

function HomePage() {
    

    return (

        <div className='Homebg'>
            <h1>Find Recipes Here</h1>
            <img src={import.meta.env.BASE_URL+"/Images/Home-bg.jpg" }alt="Home background img"/>
        </div>

    );
}

export default HomePage;
