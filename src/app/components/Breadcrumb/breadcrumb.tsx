import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { routeNames } from '../../../routes';

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
      <BreadcrumbItem active>{routeName}</BreadcrumbItem>
    ) : (
      <BreadcrumbItem>
        <Link to={match.url || ''}>{routeName}</Link>
      </BreadcrumbItem>
    );
  }
  return null;
};

// @ts-ignore
const Breadcrumbs = ({ ...rest, location: { pathname }, match }) => {
  const paths = getPaths(pathname);
  const items = paths.map((path, i) => <Route key={i++} path={path} component={BreadcrumbsItem} />);
  return <Breadcrumb>{items}</Breadcrumb>;
};

const breadcrumb = props => (
  <div>
    <Route path="/:path" component={Breadcrumbs} {...props} />
  </div>
);

export { breadcrumb as Breadcrumb };
