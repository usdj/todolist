import React from 'react';
import { Input, Button, List } from 'antd';

const TodoUi = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
        <Input
          value={props.inputValue}
          placeholder={'todo info'}
          style={{width:'300px', marginRight: '10px'}}
          onChange={props.handleInputChange}>
        </Input>
        <Button type={"primary"} onClick={props.handleBtnClick}>submit</Button>
      </div>
      <List
        style={{marginTop: '10px', width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item) => (<List.Item onClick={(index) => {props.handleItemClick(index)}}>{item}</List.Item>)}
      />
    </div>
  )}
export default TodoUi;