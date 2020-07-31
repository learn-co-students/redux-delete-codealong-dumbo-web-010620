import React from 'react'

const Todo = props => (
    <div> 
        <span>{props.todo.text}</span> 
        <button onClick={() => 
            props.delete(props.todo.id)}>
            DELETE
        </button> 
    </div>
)

export default Todo;

// ME JUMPING TO CONCLUSIONS THAT DON'T WORK I GUESS
// const Todo = props => (
//     <div> 
//         <li>{props.text}</li> 
//         <button 
//             onClick={(props.id) => props.delete(props.id)}>
//             Delete
//         </button> 
//     </div>