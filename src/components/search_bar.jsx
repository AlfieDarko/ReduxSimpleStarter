import React, { Component } from 'react';

// every react class component must have a render method

/* 
   class vs functional component? 
   start off with functional and then if you need state, props etc.
   then refactor 
*/

class SearchBar extends Component {
  // constructor is for setup ie. initialising variables and state etc.
  constructor(props) {
    super(props);
    // super used to access call functions on object's parent

    /* 
      when you want to acces this.props
      child class constructor cannot make use of this until super
      has been called 
    */

    this.state = { term: '' };
    /* 
      Only inside of the constructor function 
      will we set our state like so
   */
  }

  render() {
    // this.state.term - event.target.value // BAD!!! DONT DO THIS!!
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
  // eventHandlers run when an event occurs,
  // on this instance whenever the input changes

  // all html elements emmit a change event, we can tap into this.
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
