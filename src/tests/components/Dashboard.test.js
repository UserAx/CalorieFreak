import React from 'react';
import {shallow} from 'enzyme';
import DashBoard from '../../components/DashBoard';

test('should render from dashboard correctly', () => {
    const wrapper = shallow(<DashBoard />);
    expect(wrapper).toMatchSnapshot();
});