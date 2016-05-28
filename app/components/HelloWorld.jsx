require('./HelloWorld.scss');
import React from 'react';
import { Button } from 'antd';

export default class HelloWorld extends React.Component {

  render() {
    return (
      <div className='helloworld-component'>
        <p> 欢迎来到React的Hello World世界 </p>
        <Button type="primary">Primary</Button>
      </div>
    )
  };

}
