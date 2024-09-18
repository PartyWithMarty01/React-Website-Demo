import React, { useState } from 'react';
import './App.css';

const chromaticScale = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];

const tunings = {
  "Standard E": ['E', 'A', 'D', 'G', 'B', 'E'],
  "Drop D": ['D', 'A', 'D', 'G', 'B', 'E'],
  "Drop C": ['C', 'G', 'C', 'F', 'A', 'D'],
  "DADGAD": ['D', 'A', 'D', 'G', 'A', 'D'],
  "Open E": ['E', 'B', 'E', 'G#', 'B', 'E'],
  "Open G": ['D', 'G', 'D', 'G', 'B', 'D'],
  "1/2 Step Down": ['D#', 'G#', 'C#', 'F#', 'A#', 'D#'],
  "Whole Step Down": ['D', 'G', 'C', 'F', 'A', 'D']
};

function App() {
  const [selectedOption, setSelectedOption] = useState("Standard");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getFretboardNotes = (openNote) => {
    const startIndex = chromaticScale.indexOf(openNote);
    const notes = [];
  
    for (let i = 0; i <= 12; i++) {
      notes.push(chromaticScale[(startIndex + i) % chromaticScale.length]);
    }
  
    return notes;
  };
  

  const tuning = tunings[selectedOption];
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>PWM's Tuning Selector</h1>
        <p>A dynamic tuning selection application for Guitar Tunings.</p>

        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="Standard E">Standard Tuning (EADGBe)</option>
          <option value="Drop D">Drop D</option>
          <option value="Drop C">Drop C</option>
          <option value="DADGAD">DADGAD</option>
          <option value="Open E">Open E</option>
          <option value="Open G">Open G</option>
          <option value="1/2 Step Down">1/2 Step Down</option>
          <option value="Whole Step Down">Whole Step Down</option>
        </select>

        <table>
          <thead>
            <tr>
              <th>Frets</th>
              {Array.from({ length: 13 }, (_, fret) => (
                <th key={fret}>{fret}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tuning && tuning.map((stringNote, stringIndex) => (
              <tr key={stringIndex}>
                <th>{stringNote}-String</th>
                {getFretboardNotes(stringNote).slice(0, 13).map((note, fretIndex) => (
                  <td key={fretIndex}>{note}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {selectedOption && <h2>The tuning you selected is: {selectedOption}</h2>}
      </header>
    </div>
  );
}

export default App;
