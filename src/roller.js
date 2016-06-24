import roll from './dice.js'
import React from 'react';
import ReactDOM from 'react-dom';

let sides = 20;
let numOfDice = 1;
let getResult = () =>  roll(sides, numOfDice) ;
let resultString = `You rolled a ${sides}-sided Die ${numOfDice} times! You rolled a ${getResult()}!` ;

let divElement = <div>
  <h1 class="header">
    { resultString } 
  </h1>
</div>;

ReactDOM.render(
  divElement,
  document.getElementById('app')
);
