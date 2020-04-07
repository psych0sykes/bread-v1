import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components'
import './style.css';

// ||===== PAD COMPONENT =====||
//    PROPS:
// numberOfPads
// 
// 

// new Tone.Synth

const animateDefault = keyframes`
            0% {
                background-color: orangered;
            }
            100% {
                background-color: white;
            }
            `;

function PadGrid(props) {
    const pads = props.notes

    const [padAnimate, setPadAnimate] = useState({
        default: {
            keyframes: animateDefault,
            duration: "1s",
            direction: "linear",
            iteration: "3"
        }
    });
    
    const Pad = styled.div`
        background-color: orangered;
        animation: ${props => props.animate.keyframes} ${props => props.animate.duration} ${props => props.animate.direction} ${props => props.animate.iteration};`
    ;

    // function to randomly create an animation
    const makeAnimation = (pad) => {
        // @keyframes [pad] {0% {} 100%{}}

        let startValue = ``;
        let endValue = ``;
        let attr = ``;

        var animation = keyframes`
        0% {
            ${attr}:${startValue}
        }
        100% {
            ${attr}:${endValue}
        }
        `;
    }

    // noteTrigger - hande the click
    const noteTrigger = (pad, cb) => {
        console.log("clicked " + pad);
    }

    const createPads = pads.map((pad_id) => 
    <Pad animate={padAnimate.default} key={pad_id} className={"pad"} onClick={() => {
        noteTrigger(pad_id);
        props.padClick(pad_id);}}>{pad_id}</Pad>
    )
    

    return(
        <div className="padComponent">
            {createPads}
        </div>
    )
};

export default PadGrid;