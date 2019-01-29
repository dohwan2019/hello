import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
//  console.log('tick', this);
  const element = (
    <div>
      <hi>Hello, world!</hi>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root'));
}



const nTimer=setInterval(tick, 100);

const nTimer2=setTimeout(function(){clearTimeout(nTimer)}, 5000);

console.log(nTimer, nTimer2);
