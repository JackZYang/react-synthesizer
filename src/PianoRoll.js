import React from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";

function PianoRoll(props) {
  const firstNote = MidiNumbers.fromNote("c3");
  const lastNote = MidiNumbers.fromNote("f4");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW
  });

  return (
    <Piano
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={midiNumber => {
        props.playSound(Math.pow(2, (midiNumber - 69) / 12) * 440);
        console.log(midiNumber);
        console.log(props.oscillators);
      }}
      stopNote={midiNumber => {
        props.stopSound();
      }}
      width={500}
      keyboardShortcuts={keyboardShortcuts}
    />
  );
}

export default PianoRoll;
