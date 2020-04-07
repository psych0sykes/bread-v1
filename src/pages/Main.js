import React from "react";
import * as Tone from "tone";
import PadGrid from "../components/PadGrid";

//attach a click listener to a play button
const enableAudio = async () => {
	await Tone.start()
	console.log('audio is ready')
}

//create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toDestination();

const notes = [ "C4","C#4","D4","D#4",
                "E4","F4","F#4","G4",
                "G#4","A4","A#4","B4",
                "C5","C#5","D5","D#5"]

//play a middle 'C' for the duration of an 8th note
const start = (note) => synth.triggerAttackRelease(note, "8n");

function Main (props) {
    return (
        <div>
            <PadGrid numberOfPads={16} padClick={start} notes={notes} color={"blue"}/>
        </div>
    )
}

export default Main