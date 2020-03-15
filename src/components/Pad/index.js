import React, {useState, useEffect} from 'react';
import * as Tone from 'tone';
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

    // function to assign initial state to each pad from the props.notes array    
    useEffect(() => {
        const initialStyle = async () => {
            let style = {
                backgroundColor: "orangered"
            }
            var initialObj = {}
            for(var i = 0; i < pads.length; i++){
                initialObj[pads[i]] = style;
            }
            console.log(initialObj);
            setPadStyle(initialObj)
        }
        initialStyle();
    }, [])

    // function to randomly create an animation

    // noteTrigger - hande the click
    const noteTrigger = (pad, cb) => {
        console.log("clicked " + pad);
    }

    const createPads = pads.map((pad) => 
    <div style={padStyle[pad]} key={pad} className="pad" onClick={() => {
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