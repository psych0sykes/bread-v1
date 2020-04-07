import React, {useState, useEffect, useReducer} from 'react';
import styled, { keyframes } from 'styled-components'
import './style.css';
import './animations.css';


// ||===== PAD COMPONENT =====||
//    PROPS:
// numberOfPads
// 
// 

// new Tone.Synth

const convertArrayToObject = (array) => {
    let initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item]: "",
      };
    }, initialValue);
  };

function PadGrid(props) {
    const pads = props.notes
    const [padState, setPadState] = useState(() => convertArrayToObject(props.notes))

    // noteTrigger - hande the click
    const noteTrigger = (pad, cb) => {
        setPadState({...padState, [pad]: "clickedPad"})
        console.log(padState)
        console.log("clicked " + pad);
    }

    const createPads = pads.map((pad_id) => 
    <div key={pad_id} style={{backgroundColor: props.color}} onAnimationEnd={() => setPadState({...padState, [pad_id]: ""})} className={"pad " + padState[pad_id]} onClick={() => {
        noteTrigger(pad_id);
        props.padClick(pad_id);}}>{pad_id}</div>
    )
    

    return(
        <div className="padComponent">
            {createPads}
        </div>
    )
};

export default PadGrid;