import Home from './components/Home';
import React from 'react'
import ReactDOM from 'react-dom';
// start point for client side app

console.log('Client side rendering');
ReactDOM.hydrate(<Home />, document.getElementById('root'))
// override the existing html skeleton  render by server and bind the events etc..
// Which is called hydration
// Use `ReactDOM.hydrade`, instead of `render`
