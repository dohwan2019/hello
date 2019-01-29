import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

const data = [
  {name:"React 개발에 필요한 환경을 구축한다.", completed:true, color: 'red'},
  {name:"새로운 자바스크립트 문법을 익힌다.", completed:true, color: 'red'},
  {name:"개발 편의를 위한 VSCode IDE를 익힌다.", completed:false, color: 'red'},
  {name:"기본적인 Git 사용법을 익힌다.", completed:true, color: 'red'},
  {name:"PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.", completed:false, color: 'red'},
  {name:"React 로 간단한 노트 앱을 만들어본다.", completed:true, color: 'red'}
];

class App extends Component {
  render() {
    return (
      <div className="App">
       <Todos title={"강의목표"}
       items={data}/>
      </div>
    );
  }
}

export default App;
