import React from 'react';
import './TodoList.less';
import TodoListItem from "./TodoListItem";
import {Input, Button} from 'antd';

const Search = Input.Search;

class TodoList extends React.Component {
  static defaultProps = {
    items : [
      {name:"React 개발에 필요한 환경을 구축한다.", completed:true, color: 'red'},
      {name:"새로운 자바스크립트 문법을 익힌다.", completed:true, color: 'red'},
      {name:"개발 편의를 위한 VSCode IDE를 익힌다.", completed:false, color: 'red'},
      {name:"기본적인 Git 사용법을 익힌다.", completed:true, color: 'red'},
      {name:"PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.", completed:false, color: 'red'},
      {name:"React 로 간단한 노트 앱을 만들어본다.", completed:true, color: 'red'}
    ]
  };

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
        <div className="SearchArea">
          <Search
          enterButton="입력"
        />
        </div>
        <div className="DataArea">
          <ul>
            {items.map((item, idx)=>{
              return (
              <TodoListItem name={item.name} completed={item.completed} idx={idx}/>
              );
            })}
          </ul>
        </div>
        <div className="ButtonArea">
          <div>
            <Button>전체선택</Button>
          </div>
          <div>
            할일 : {items.length}
            완료 : {()=>{}}
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList;

