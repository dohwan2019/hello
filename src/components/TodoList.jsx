import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const {title, items, isUnmount} = this.props;
    console.log({isUnmount});
    return (
      <div className="TodoList">
        <h1>{title}</h1>
        <ul>
          {items.map((item, idx)=>{

            const {name, completed} = item;

            return (
              <li key={idx}><input type="checkbox" checked={completed?"checked":""} readOnly/>{name} -> {isUnmount?"완료":"미완료"}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList;

