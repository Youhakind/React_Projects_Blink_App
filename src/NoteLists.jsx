import React from 'react';

//Componente funcional recibe los porps
const NoteLists = ({notes, onDelete}) => {
    return (
        <ul>

            {notes.map((note, index) => (
                <li key={index}>
                    {note}
                    <button onClick={() => onDelete(index)}>Eliminiar</button>
                </li>
                ))}
        </ul>
    )
};

export default NoteLists