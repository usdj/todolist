import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {Button, Radio, Icon, Menu, Dropdown} from 'antd';

class TButton extends Component {
  state = {
    size: 'large',
    loading: false,
    iconLoading: false
  };

  handleSizeChange = (e) => {
    this.setState({size: e.target.value});
  }

  enterLoading = () => {
    this.setState({loading: true});
  }

  enterIconLoading = () => {
    this.setState({iconLoading: true});
  }

  handleMenuClick = (e) => {
    console.log('click', e);
  }

  render() {
    const size = this.state.size;
    const ButtonGroup = Button.Group;
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <div>
          <Button type="primary">Button</Button>
          <Button>Default</Button>
          <Button type={"dashed"}>Dashed</Button>
          <Button type={"danger"}>Danger</Button>
        </div>
        <br/>
        <div>
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <Button type="primary" size={size}>Primary</Button>
          <Button size={size}>Normal</Button>
          <Button type="dashed" size={size}>Dashed</Button>
          <Button type="danger" size={size}>Danger</Button>
          <br/>
          <Button type="primary" shape="circle" icon="download" size={size}/>
          <Button type="primary" icon="download" size={size}>Download</Button>
          <br/>
          <Button.Group size={size}>
            <Button type="primary">
              <Icon type="left"/>Backward
            </Button>
            <Button type="primary">
              Forward<Icon type="right"/>
            </Button>
          </Button.Group>
          <br/>
        </div>
        <br/>
        <div>
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <br/>
          <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
            Click me!
          </Button>
          <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
            Click me!
          </Button>
          <br/>
          <Button shape="circle" loading/>
          <Button type="primary" shape="circle" loading/>
        </div>
        <br/>
        <div>
          <h4>Basic</h4>
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>

          <h4>With Icon</h4>
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />Go back
            </Button>
            <Button type="primary">
              Go forward<Icon type="right" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" icon="cloud" />
            <Button type="primary" icon="cloud-download" />
          </ButtonGroup>
        </div>
        <br/>
        <div>
          <Button type="primary" block>Primary</Button>
          <Button block>Default</Button>
          <Button type="dashed" block>Dashed</Button>
          <Button type="danger" block>danger</Button>
        </div>
        <br/>
        <div>
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" icon="search">Search</Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <br />
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search" />
          <Button type="dashed" icon="search">Search</Button>
        </div>
        <br/>
        <div>
          <Button type="primary">Primary</Button>
          <Button type="primary" disabled>Primary(disabled)</Button>
          <br />
          <Button>Default</Button>
          <Button disabled>Default(disabled)</Button>
          <br />
          <Button type="dashed">Dashed</Button>
          <Button type="dashed" disabled>Dashed(disabled)</Button>
          <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
            <Button ghost>Ghost</Button>
            <Button ghost disabled>Ghost(disabled)</Button>
          </div>
        </div>
        <br/>
        <div>
          <Button type="primary">primary</Button>
          <Button>secondary</Button>
          <Dropdown overlay={menu}>
            <Button>
              Actions <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
        <br/>
        <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
          <Button type="primary" ghost>Primary</Button>
          <Button ghost>Default</Button>
          <Button type="dashed" ghost>Dashed</Button>
          <Button type="danger" ghost>danger</Button>
        </div>
      </div>
    );
  }
}

export default TButton;