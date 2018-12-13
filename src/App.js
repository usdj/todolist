import React, { Component } from 'react';
import { Button} from 'antd';
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
        <label>Button Style</label>
        <Button type="primary">Button</Button>
        <Button>Default</Button>
        <Button type={"dashed"}>Dashed</Button>
        <Button type={"danger"}>Danger</Button>
      </div>

    );
  }
}

export default App;