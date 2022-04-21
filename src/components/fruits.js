import React from 'react';

const Fruits = (props) => {
    return (
        <div>
            
            <ul>
                <li>This is a {props.fruit} and it is {props.color} in color</li>
            </ul>

        </div>
    );
}

export default Fruits;
