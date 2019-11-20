import React from 'react';
import { shallow } from 'enzyme';
import Load from './Loading';

describe('Load component', () => {
  it('renders Load component', () => {
    const wrapper = shallow(<Load fetchQuote={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
