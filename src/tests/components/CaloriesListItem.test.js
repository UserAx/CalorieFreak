import React from 'react';
import {shallow} from 'enzyme';
import CaloriesListItem from '../../components/CaloriesListItem';
import calories from '../fixtures/calories';

test('should render calories list item correctly', () => {
    const wrapper = shallow(<CaloriesListItem {...calories[0]} />);
    expect(wrapper).toMatchSnapshot();
});