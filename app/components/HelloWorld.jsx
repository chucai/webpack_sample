require('./HelloWorld.scss');
import React from 'react';
import { Button, Row, Col, Menu, Icon } from 'antd';
import HelloCard from './HelloCard';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class HelloWorld extends React.Component {

  render() {
    return (
      <div className='helloworld-component'>
      <Row>
      <Col span={8}>
        <Menu style={{ width: 240 }} defaultOpenKeys={['sub1']}
        mode="inline">
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
           <MenuItemGroup title="分组1">
           <Menu.Item key="1">选项1</Menu.Item>
           <Menu.Item key="2">选项2</Menu.Item>
           </MenuItemGroup>
           <MenuItemGroup title="分组2">
           <Menu.Item key="3">选项3</Menu.Item>
           <Menu.Item key="4">选项4</Menu.Item>
           </MenuItemGroup>
          </SubMenu>
        </Menu>
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
