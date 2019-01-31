import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

//    this.handleTitleClick = this.handleTitleClick.bind(this);
  }


  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleTitleClick () {
    console.log('click', this);
  }

  handleOnChange = ({target}) => {
    console.log(target);
    target.setAttribute("checked", "");
  }

  render() {
    const {title, items, isUnmount} = this.props;
    console.log({isUnmount});
    return (
      <div className="TodoList">
        <h1 onClick={()=>this.handleTitleClick()}>{title}</h1>
        <ul>
          {items.map((item, idx)=>{

            const {name, completed} = item;

            return (
              <li key={idx}><input type="checkbox" checked={true} onChange={this.handleOnChange} readOnly/>{name} -> {isUnmount?"완료":"미완료"}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList;

