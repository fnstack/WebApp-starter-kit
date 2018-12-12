import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import './layout.less';

const routeNames = {
  '/': 'Tableau de bord',
  '/dashboard': 'Tableau de bord',
  '/main': 'Menu',
  '/main/smile': 'Menu test'
};

const findRouteName = url => routeNames[url];

const getPaths = pathname => {
  const paths = ['/'];

  if (pathname === '/') {
    return paths;
  }

  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

// @ts-ignore Unreachable parameter error
const BreadcrumbsItem = ({ ...rest, match }) => {
  const routeName = findRouteName(match.url);
  if (routeName) {
    return match.isExact ? (
      <Breadcrumb.Item>{routeName}</Breadcrumb.Item>
    ) : (
      <Breadcrumb.Item>
        <Link to={match.url || ''}>{routeName}</Link>
      </Breadcrumb.Item>
    );
  }
  return null;
};

// @ts-ignore
const Breadcrumbs = ({ ...rest, location: { pathname }, match }) => {
  const paths = getPaths(pathname);
  const items = paths.map((path, i) => <Route key={i++} path={path} component={BreadcrumbsItem} />);
  return (
    <div className={'bread'}>
      <Breadcrumb>{items}</Breadcrumb>
    </div>
  );
};

const breadcrumb = props => (
  <div>
    <Route path="/:path" component={Breadcrumbs} {...props} />
  </div>
);

export { breadcrumb as Breadcrumb };
