import React from 'react';
import * as Tone from 'tone';
import './style.css';

// ||===== PAD COMPONENT =====||
//    PROPS:
// numberOfPads
// 
// 

// new Tone.Synth

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

    const pads = props.notes

    const createPads = pads.map((pad) => 
    <div style={padStyle} key={pad} className="pad" onClick={() => props.padClick(pad)}>{pad}</div>
    )

    return(
        <div className="padComponent">
            {createPads}
        </div>
    )
};

export default Pad;