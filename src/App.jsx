import { useState, useEffect } from 'react';//importa los hooks de React
import NoteLists from './NoteLists'

const App = () => {
  const [notes, setNotes] = useState([]); //el usestate para almancenar las notas
  const [inputValue, setInputValue] = useState(''); //el estado de entrada

  //el useeffect carga las notas desde el local storage del browser
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));// se puede usar un trow error para confirmar sea string?
    }

  },[]);

  //hook para guardar las notas en el localstorage una vez agregadas o cambiadas
   useEffect(() => {
    if(notes.length){
      localStorage.setItem('notes', JSON.stringify(notes))
    }
    
   }, [notes]);

   const addNote = () => {
    if(inputValue.trim()) {
      setNotes([...notes, inputValue]) //pel input p ara agregar la nueva nota
      setInputValue('');//esto limpia la casilla de entrada de notas
    }

   };

    const deleteNote = (index) => {
      const newNotes = notes.filter((_, i) => i !==index);
       setNotes(newNotes);
    }
return (
  <div className='app'>
  <h1> Blink Notes</h1>
  <div className="input-container" >
  <input type='text' value={inputValue}//campo para entrada del usuario
  //llama la funcion setInputValue para actualizar el estado del inputValue con nuevo valor
  onChange={(e) => setInputValue(e.target.value)}
  placeholder='Ponle algo!!'></input>
  <button onClick={addNote}>Agrega la nota</button> 
  </div>
  <NoteLists notes={notes} onDelete={deleteNote} />
  </div>
)





}

export default App
