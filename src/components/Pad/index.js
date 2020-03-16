import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components'
import './style.css';

// ||===== PAD COMPONENT =====||
//    PROPS:
// numberOfPads
// 
// 

// new Tone.Synth

function Pad(props) {
    const pads = props.notes

    const [padStyle, setPadStyle] = useState({})

    const initialStyle = {backgroundColor: "orangered"}

    // function to assign initial state to each pad from the props.notes array    
    useEffect(() => {
        const setInitialStyle = async () => {
            var initialObj = {}
            for(var i = 0; i < pads.length; i++){
                initialObj[pads[i]] = initialStyle;
            }
            console.log(initialObj);
            setPadStyle(initialObj)
        }
        setInitialStyle();
    }, [])

    // function to randomly create an animation
    const animate = (pad) => {
        // @keyframes [pad] {0% {} 100%{}}

        let start = ``;
        let end = ``;

        var animation = keyframes`
        0% {
            ${start}
        }
        100% {
            ${end}
        }
        `;

    }

    // noteTrigger - hande the click
    const noteTrigger = (pad, cb) => {
        console.log("clicked " + pad);
    }

    const createPads = pads.map((pad) => 
    <div style={padStyle[pad]} key={pad} className={"pad"} onClick={() => {
        noteTrigger(pad);
        props.padClick(pad);}}>{pad}</div>
    )

    return(
        <div className="padComponent">
            {createPads}
        </div>
    )
};

export default Pad;