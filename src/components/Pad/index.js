import React from 'react';
import './style.css';

function Pad(props) {

    const createArray = (number) => {

        let newArray = [];

        for(var i = 0; i < number; i++){
            newArray.push(i)
        };

        return newArray;
    };

    const pads = createArray(props.numberOfPads)

    const createPads = pads.map((pad) => {
    <div key={pad} className="pad" onClick={props.padClick}>{pad}</div>
    })

    return(
        <div className="padComponent">
        </div>
    )
};

export default Pad;