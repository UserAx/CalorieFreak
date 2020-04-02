import React from 'react';
import {CaloriesSummary} from '../../components/CaloriesSummary';
import {shallow} from 'enzyme';

test('should render calories summary correctly', () => {
    const wrapper = shallow(<CaloriesSummary caloriesCount={3} caloriesTotal={215554}/>);
    expect(wrapper).toMatchSnapshot();
});