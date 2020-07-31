import React, { Component } from 'react'
import { connect } from 'react-redux'

/**
 * this is a form, so just because it seems like the 'literal' opposite of the deleteTodo functionality,
 * don't be tricked by that. This doesn't have to be iteratively created for each new component, this is
 * a form with a handleSubmit
 */

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  /** this is some hoisting/confusing ouroboros shit because addTodo only gets integrated at the export level;
   * but that's not too hard because I think we could break this by just calling this.props.addTodo anywhere 
   * in this file; it shouldn't work because it's only the export that has that 
   * */ 
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
    this.setState({text: ''})
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add todo</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
       </form>
     </div>
   );
  }
};

/** here we configure the type of dispatch:
 * connect passes the store.dispatch() method as an argument to mapDispatchToProps which is a call-after ƒ
 * ƒ mapDispatchToProps takes dispatch as an argument, then creates and returns an "addTodo object" with a literal
 * addTodo key whose wire points to a ƒ dispatching a formatted and contextualized action
 * 
 * that's a lot to remember so don't worry if it doesn't all click at once
 */
const mapDispatchToProps = dispatch => ({
  addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
})

export default connect(null, mapDispatchToProps)(CreateTodo);
