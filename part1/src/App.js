import './App.css';
import Header from './Header';
import Content from './Content';
import Total from './Total';
import {Note} from './Note';
import { useState } from 'react';


function App (props) {

  // Parte 1 //
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  // Parte Notas //

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(newNote);
    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
    };
    console.log(noteToAddToState)

    setNotes(notes.concat(noteToAddToState));
    setNewNote("");
  };

  return (
    <>
    <Header course={course}/>

    <Content 
    part1={part1}
    part2={part2}
    part3={part3}
    />

    <Total 
    exercises1={exercises1} 
    exercises2={exercises2}
    exercises3={exercises3}
    />
    <div>
      <h2>Notes:</h2>
      <ol>
        {notes.map((note) => {
          return (
            <Note key={note.id} {...note}/>
          )
        })}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}/>
        <button> Crear nota</button>
      </form>
    </div>

    </>
  )
}

export default App;
