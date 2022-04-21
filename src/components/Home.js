import React from 'react';
import Cars from './cars';
import Color from './color';
import Fruits from './fruits';

const Home = () => {
    return (
        <div>
            <Cars brand ='volvo' model ='v-50' year = '2015' />
            <Cars brand ='Honda' model ='Pilot' year = '2018' />
            <h1>List of fruits</h1>
            <Fruits fruit = 'Apple' color = 'red' />
            <Fruits fruit = 'Mango' color ='blue' />
            <Fruits fruit = 'Pineaple' color = 'green'/>

            <h1>These are colors</h1>

            <Color hue = 'Blue' text = 'Blue is a primary color' newHue = 'Yellow' newText = 'Yellow is a scondary color' />
            <Color hue = 'Red' text = 'Red is a primary color' newHue = 'Pink' newText = 'Pink is a scondary color' />
        </div>
    );
}

export default Home;
