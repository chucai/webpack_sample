require('./HelloWorld.css');
import React from 'react';

export default class HelloWorld extends React.Component {

  render() {
    return (
      <div className='helloworld-component'>
        欢迎来到React的Hello World世界
      </div>
    )
  };

}
