import React from 'react';
import ReactDOM from 'react-dom';

// Create a new compononent. This component should produce some HTML
const App = () => {
  return <div> Hi! </div>;
};
// Take this html and put it on the page (in the DOM)
//  first argument takes a component, second takes a selected div
ReactDOM.render(<App />, document.querySelector('.container'));
