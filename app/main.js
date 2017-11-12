import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
$(function(){
    $('body').css('background-color','red');
})

ReactDOM.render(<App />, document.getElementById('root'));
