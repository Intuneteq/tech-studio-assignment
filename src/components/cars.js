import React from 'react';
import { useState } from 'react';

const Cars = ({brand, model, year}) => {

    const [car, setCar] = useState('');

    const [age, setAge] = useState('2022');

    const handleClick = () => {
     setCar(`My car is a ${brand}`);
     setAge(`My car is ${2022-year} years old `);
     
    }
    return (
        <div>
            <ul>
                <li>Car Brand: {brand}</li>
                <li>Car Model: {model}</li>
                <li>Car Year: {year}</li>
            </ul>
            <button onClick={handleClick}>Click me</button>

            <p>This is my car: {car}</p>
            <p>Year of my car:{age}</p>
        </div>
    );
}

export default Cars;
