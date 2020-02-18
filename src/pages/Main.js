import React from "react";
import * as Tone from "tone";

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
        <div onClick={enableAudio} style={{backgroundColor: "red",width: "50px",height: "50px"}}></div>
        </div>
    )
}

export default Main