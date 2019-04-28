import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import nav from './_nav';

const { SubMenu } = Menu;

// nav dropdown
const navDropdown = item => {
  return (
    <SubMenu
      key={item.key}
      title={
        <span>
          <Icon type={item.icon} />
          <span>{item.name}</span>
        </span>
      }
    >
      {navList(item.children)}
    </SubMenu>
  );
};

const navList = items => {
  return items.map(item => navType(item));
};

const navType = item => (item.children ? navDropdown(item) : navLink(item));

// nav link
const navLink = item => {
  const url = item.url ? item.url : '';
  return (
    <Menu.Item key={item.key}>
      <Link to={url}>
        <Icon type={item.icon} />
        <span>{item.name}</span>
      </Link>
    </Menu.Item>
  );
};

const SideMenu = () => {
  return (
    <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']} className="sidemenu">
      {navList(nav.items)}
    </Menu>
  );
};

export { SideMenu };
