import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from "./Navigation";
import './AppRouter.less';
import TodoList from './TodoList';
import styled from 'styled-components';


const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;


class Index extends React.Component {
  constructor(props) {
    super(props);
    console.log('[Index] constructor');
  }

  render() {
    return (
    <Page>
      <h2>Home</h2>
    </Page>
    )
  }

  componentDidMount() {
    console.log('[Index] componentDidMount');
  }

  componentWillUnmount() {
    console.log('[Index] componentWillUnmount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Index] componentDidUpdate');
  }
}
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('[Index] constructor');
  }

  render() {
    return (
    <Page>
      <h2>About</h2>
    </Page>
    )
  }

  componentDidMount() {
    console.log('[About] componentDidMount');
  }

  componentWillUnmount() {
    console.log('[About] componentWillUnmount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[About] componentDidUpdate');
  }
}



  const AppRouter = () => (
    <Router>
      <div className="AppRouter">
        <Navigation/>
        <div className="textView">
          <Route path="/" exact component={Index}/>
          <Route path="/about/" strict component={About}/>
          <Route path="/todo-list/" component={TodoList}/>
        </div>
      </div>
    </Router>
  );
export default AppRouter;
