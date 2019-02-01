import React from 'react';
import {Checkbox, Button} from 'antd';

class TodoListItem extends React.Component {
  render() {
    const {name, completed, idx} = this.props;

    return (
      <li className="TodoListItem">
        <Checkbox name="ch" defaultChecked={completed}/>
        {name}
        <Button id={"update"+idx} className="btnUpdate">수정</Button>
        <Button id={"delete"+idx} className="btnDelete">삭제</Button>
      </li>
    )
  }
}

export default TodoListItem;
