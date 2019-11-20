import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading component', () => {
  it('should render Loading component', () => {
    const wrapper = shallow(<Loading fetchQuote={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
