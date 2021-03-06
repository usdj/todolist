import React from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAciton} from './store/actionCreators';
import TodoUi from './TodoUi';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoUi
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemClick={this.handleItemClick}
      />
    )
  }

  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }

  handleStoreChange(){
    this.setState(store.getState());
  }

  handleBtnClick(){
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemClick(index){
    const action = getDeleteItemAciton(index);
    store.dispatch(action);
  }
}

export default Todo;