import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Todos title={"강의목표"}
       items={[
         "React 개발에 필요한 환경을 구축한다.",
         "새로운 자바스크립트 문법을 익힌다.",
         "개발 편의를 위한 VSCode IDE를 익힌다.",
         "기본적인 Git 사용법을 익힌다.",
         "PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.",
         "React 로 간단한 노트 앱을 만들어본다."
         ]}/>
      </div>
    );
  }
}

export default App;
