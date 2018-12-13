import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor={'insertArea'}>Input content</label>
          <input
            id={'insertArea'}
            className={'input'}
            value={this.state.inputValue}
            onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>submit</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  componentDidMount() {
    axios.get('/api/todoList')
      .then((res) => {
        this.setState(() => ({
          list: [...res.data]
          }));
      })
      .catch(() => {
       console.log("fail");
      })
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: ''
    }));
  }

  handleItemDelete(index) {
    this.setState((preState) => {
      const list = [...preState.list];
      list.splice(index, 1);
      return {list}
    });
  }
}

export default TodoList;