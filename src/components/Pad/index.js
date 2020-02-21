import React from 'react';
import './style.css';

// ||===== PAD COMPONENT =====||
//    PROPS:
// numberOfPads
// padSize
// 

function Pad(props) {

    const createArray = (number) => {

        let newArray = [];

        for(var i = 0; i < number; i++){
            newArray.push(i)
        };

        return newArray;
    };

    const padStyle = {
        backgroundColor: "orangered",

    }

    const pads = createArray(props.numberOfPads)

    const createPads = pads.map((pad) => 
    <div style={padStyle} key={pad} className="pad" onClick={props.padClick}>{pad}</div>
    )

    return(
        <div className="padComponent">
            {createPads}
        </div>
    )
};

export default Pad;