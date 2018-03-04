import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Nav, NavItem } from 'reactstrap';
import nav from './_nav';
import * as classNames from 'classnames';

interface SidebarProps {
  className?: string;
  style?: React.CSSProperties;
  location?: any;
}

/**
 * The Sidebar component
 *
 * @returns Sidebar as react stateless component
 */
const Sidebar: React.StatelessComponent<SidebarProps> = props => {
  const handleClick = e => {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  };

  const activeRoute = routeName => {
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  };

  // badge addon to NavItem
  const badge = b => {
    if (b) {
      const classes = classNames(b.class);
      return (
        <Badge className={classes} color={b.variant}>
          {b.text}
        </Badge>
      );
    }
  };

  // simple wrapper for nav-title item
  const wrapper = item => {
    return !item.wrapper ? item.name : React.createElement(item.wrapper.element, item.wrapper.attributes, item.name);
  };

  // nav list section title
  const title = (t, key) => {
    const classes = classNames('nav-title', t.class);
    return (
      <li key={key} className={classes}>
        {wrapper(t)}{' '}
      </li>
    );
  };

  // nav list divider
  // @ts-ignore
  const divider = (d, key) => <li key={key} className="divider" />;

  // nav item with nav link
  const navItem = (item, key) => {
    const classes = classNames('nav-link', item.class);
    return (
      <NavItem key={key}>
        <NavLink to={item.url} className={classes} activeClassName="active">
          <i className={item.icon} />
          {item.name}
          {badge(item.badge)}
        </NavLink>
      </NavItem>
    );
  };

  // nav dropdown
  const navDropdown = (item, key) => {
    return (
      <li key={key} className={activeRoute(item.url)}>
        <a className="nav-link nav-dropdown-toggle" href="#" onClick={handleClick}>
          <i className={item.icon} /> {item.name}
        </a>
        <ul className="nav-dropdown-items">{navList(item.children)}</ul>
      </li>
    );
  };

  // nav link
  const navLink = (item, idx) =>
    item.title
      ? title(item, idx)
      : item.divider ? divider(item, idx) : item.children ? navDropdown(item, idx) : navItem(item, idx);

  // nav list
  const navList = items => {
    return items.map((item, index) => navLink(item, index));
  };

  // sidebar-nav root
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <Nav>{navList(nav.items)}</Nav>
      </nav>
    </div>
  );
};

export { Sidebar };
