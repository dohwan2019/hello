import React from 'react';
import { Menu} from 'antd';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
  state = {
    current: 'home',
  }

  handleClick = (e) => {
    console.log('click ', e);

    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <nav className="Navigation">
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home" className="rightBar">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about" className="rightBar">
          <Link to="/about/">About</Link>
        </Menu.Item>
        <Menu.Item key="todo-list">
          <Link to="/todo-list/">TodoList</Link>
        </Menu.Item>
      </Menu>
      </nav>
    );
  }
}

export default Navigation;
