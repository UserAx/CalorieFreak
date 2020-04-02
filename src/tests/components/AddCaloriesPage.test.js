import React from 'react';
import {AddCaloriesPage} from '../../components/AddCaloriesPage';
import {shallow} from 'enzyme';
import calories from '../fixtures/calories';

let startAddCalorieSpy, historySpy, wrapper;

beforeEach(() => {
    startAddCalorieSpy=jest.fn();
    historySpy={push: jest.fn()};
    wrapper = shallow(<AddCaloriesPage startAddCalorie={startAddCalorieSpy} history={historySpy}/>);
});

test('should render add calories page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('handle onSubmit correctly', () => {
    wrapper.find('CaloriesForm').prop('onSubmit')(calories[0]);
    expect(historySpy.push).toHaveBeenCalledWith('/');
    expect(startAddCalorieSpy).toHaveBeenCalledWith(calories[0]);
});