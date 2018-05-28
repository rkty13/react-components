import React from 'react';
import {shallow} from 'enzyme';

import PageLayout from './PageLayout';

describe('<PageLayout />', () => {
  it('renders', () => {
    const wrapper = shallow(<PageLayout>test</PageLayout>);

    expect(wrapper.hasClass('rc-page-layout')).toBe(true);
  });

  it('renders without side margins', () => {
    const wrapper = shallow(<PageLayout noSides>test</PageLayout>);

    expect(wrapper.hasClass('rc-page-layout--no-sides')).toBe(true);
  });

  it('renders without top margin', () => {
    const wrapper = shallow(<PageLayout noTop>test</PageLayout>);

    expect(wrapper.hasClass('rc-page-layout--no-top')).toBe(true);
  });

  it('renders without bottom margin', () => {
    const wrapper = shallow(<PageLayout noBottom>test</PageLayout>);

    expect(wrapper.hasClass('rc-page-layout--no-bottom')).toBe(true);
  });
});
