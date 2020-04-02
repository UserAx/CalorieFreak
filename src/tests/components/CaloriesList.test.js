import React from 'react';
import {shallow} from 'enzyme';
import {CaloriesList} from '../../components/CaloriesList';
import calories from '../fixtures/calories';

test('should render calorie list correctly', () => {
    const wrapper = shallow(<CaloriesList calories={calories}/>);
    expect(wrapper).toMatchSnapshot();
});