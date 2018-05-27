import React from 'react';
import {shallow} from 'enzyme';

import Text from './Text';

describe('<Text />', () => {
  it('renders', () => {
    const wrapper = shallow(<Text />);

    expect(wrapper.find('p')).toHaveLength(1);
  });
});
