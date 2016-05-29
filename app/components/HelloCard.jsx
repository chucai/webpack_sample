import React from 'react';
import { Card } from 'antd';

export default class HelloCard extends React.Component {

  render() {
    return (
      <Card title='HelloCard的标题' extra={<a href="#">更多</a>} style={{ width: 300 }}>
      <p>卡片的内容</p>
      <p>卡片的内容</p>
      <p>卡片的内容</p>
      </Card>
    );
  };
}
