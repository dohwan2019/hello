import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const myElem=<p>이렇게 써도 되나?</p>;

const myCom=()=><p>이렇게 써도 되나?</p>

class myKlass extends React.Component {

  render() {
    return (
      <p>
        클래스형 컴포넌트
      </p>
    );
  }

}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

ReactDOM.render(<App />, document.getElementById('root'));
