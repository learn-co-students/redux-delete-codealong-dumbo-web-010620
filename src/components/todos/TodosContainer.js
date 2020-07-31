import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

/**
 * my prediction: 
 * 1) add mapDispatchToProps definition, it IS an on object
 * not a function that returns an object
 * what is it? An object whose key value pairs match kv pairs in redux state
 * 
 * we write it as qq (this is an educated guess)
 * const mapDispatchToProps = {todos}
 * I feel like before we wrote it as 
 * const mapDispatchToProps = {todos} => {todos}
 * so it *was* a function returning an object? qq 
 * 
 * 2) we add mapDispatchToProps in the export statement thus
 * export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
 * combining steps 1 and 2 could look like this? qq
 * export default connect(mapStateToProps, mapDispatchToProps={todos})(TodosContainer);
 * 
 * 3) somewhere in TodosContainer (qq or below it?), we create an action that can be dispatched via
 * this.props.dispatch(createDeleteAction(deleteTodoId))
 * I'm leaning with just having the action creator below the TodosContainer class def
 * 
 * 4) when that action is dispatched, it hits the reducer, which needs a corresponding case
 * inside of its switch statement block case 'DELETE_TODO': 
 * this case needs a code block to run that will return a new state minus the just deleted Todo
 * 
 * 5) next question: what is the delete hierarchy (are we passing down a function as props from
 * TodosContainer?); or in other words, if the delete button is on the Todo component, but 
 * we have another component called DeleteTodo (qq yes? maybe?) how does clicking on the delete button
 * transduce to redux state modification?
 * 
 * 
 */

class TodosContainer extends Component {

  handleDelete = (event) => {
    // don't think we need to prevent default but can't hurt? qq
    // everything can hurt lol
    event.preventDefault()
    this.props.delete() // wtf goes in parens? qq how do we get the right id?

    console.log('clicked the delete button')

  }

  // qq my edits
  renderTodos = () => this.props.todos.map((todo) => 
    <Todo 
      // theirs qq ** √√
      delete={this.props.delete}
      key={todo.id} 
      todo={todo} 

      // mine
      // handleDelete={this.handleDelete} 
    />
  )

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = reduxState => {
  return {
    todos: reduxState.todos
  }
}

const mapDispatchToProps = dispatch => ({
  // my version
  // deleteTodo: todoId => dispatch({type: 'DELETE_TODO', payload: todoId})
  
  // updated solution version (my prediction)
  delete: todo => dispatch({type: 'DELETE_TODO', payload: todo})
})

/**
 * do we need mapState? Are we relying on what's in redux state here? YES we need to see all the todos
 *  */ 
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
