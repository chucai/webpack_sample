require('./HelloWorld.scss');
import React from 'react';
import { Button, Row, Col } from 'antd';
import HelloCard from './HelloCard';

export default class HelloWorld extends React.Component {

  render() {
    return (
      <div className='helloworld-component'>
      <Row>
      <Col span={8}>
        这是边栏
      </Col>
      <Col span={16}>
        <p> 欢迎来到React的Hello World世界 </p>
        <Button type="primary">Primary</Button>
        <HelloCard />
      </Col>
      </Row>
      </div>
    )
  };

}
