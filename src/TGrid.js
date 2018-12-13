import React from 'react';
import { Row, Col } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

class TGrid extends React.Component {

  render(){
    const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
    return (
      <div>
        <div className="gutter-example">
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
          </Row>
        </div>
        <br/>

        <div>
          <Row>
            <Col span={8} className="gutter-box">col-8</Col>
            <Col span={8} offset={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={6} offset={6}>col-6 col-offset-6</Col>
            <Col span={6} offset={6}>col-6 col-offset-6</Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>col-12 col-offset-6</Col>
          </Row>
        </div>
        <br/>

        <div>
          <Row>
            <Col span={18} push={7} className={"gutter-box"}>col-18 col-push-6</Col>
            <Col span={6} pull={18} className={"gutter-box"}>col-6 col-pull-18</Col>
          </Row>
        </div>
        <br/>

        <div>
          <p>Align Top</p>
          <Row type="flex" justify="center" align="top">
            <Col span={4} ><DemoBox value={100}>col-4</DemoBox></Col>
            <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
            <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
            <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
          </Row>

          <p>Align Center</p>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
            <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
            <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
            <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
          </Row>

          <p>Align Bottom</p>
          <Row type="flex" justify="space-between" align="bottom">
            <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
            <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
            <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
            <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
          </Row>
        </div>

      </div>
    );
  }
}

export  default TGrid;