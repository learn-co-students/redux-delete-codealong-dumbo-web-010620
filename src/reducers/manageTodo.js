/**
 * this is where you look to understand what
 * redux state is going to look like
 * the initial state is set via default arg
 * and default return? 
 * medium priority question: qq how does this first run?
 */
import uuid from 'uuid'

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };

      // something like this, but this might break bc there's still missing setup
      // ok so this is deleting all of todos atm
    case 'DELETE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}
