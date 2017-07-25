var React = require('react');
var ReactDOM = require('react-dom');

/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})

require('./css/main.css');
import Main from './Main';

ReactDOM.render(
  <div>
    <h1>React lives!</h1>
    <Main />
  </div>
  ,
  document.getElementById('root'));
