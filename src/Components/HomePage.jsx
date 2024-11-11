
import React from 'react';
import photo from './Images/Home-bg.jpg';

function HomePage() {
    

    return (

        <div className='Homebg'>
            <h1>Find Recipes Here</h1>
            <img src={photo} alt="HomePage background img"/>
        </div>

    );
}

export default HomePage;
