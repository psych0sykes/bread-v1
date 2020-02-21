import React from "react";
import * as Tone from "tone";
import Pad from "../components/Pad";

//attach a click listener to a play button
const enableAudio = async () => {
	await Tone.start()
	console.log('audio is ready')
}

//create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
const start = () => synth.triggerAttackRelease("C4", "8n");

function Main (props) {
    return (
        <div>
        <div onClick={start} style={{backgroundColor: "black",width: "300px",height: "300px"}}></div>
        <Pad numberOfPads={16}/>
        </div>
    )
}

export default Main