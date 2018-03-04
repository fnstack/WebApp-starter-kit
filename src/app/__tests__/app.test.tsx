// @ts-ignore: Unreachable code error
import * as React from 'react';
import { shallow } from 'enzyme';

import { App } from '../containers/app';

describe('<Layout />', () => {
  it('should contains Header, Sidebar and Footer component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('withRouter(Connect(Header))').length).toEqual(1);
    expect(wrapper.find('Sidebar').length).toEqual(1);
    expect(wrapper.find('breadcrumb').length).toEqual(1);
    expect(wrapper.find('Footer').length).toEqual(1);

    const containerProps = wrapper.find('Container').props();

    expect(containerProps.fluid).toBe(true);
  });
});
