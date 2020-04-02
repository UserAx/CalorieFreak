import React from 'react';
import {shallow} from 'enzyme';
import calories from '../fixtures/calories';
import {EditCaloriesPage} from '../../components/EditCaloriesPage';

let wrapper, startEditCalorieSpy, startRemoveCalorieSpy, historySpy;
const calorie = calories[1];

beforeEach(() => {
    startEditCalorieSpy=jest.fn();
    startRemoveCalorieSpy=jest.fn();
    historySpy={push: jest.fn()};
    wrapper=shallow(<EditCaloriesPage 
        startEditCalorie={startEditCalorieSpy}
        startRemoveCalorie={startRemoveCalorieSpy} 
        history={historySpy}
        calorie={calorie}/>);
});

test('should render edit calorie form', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit action of Edit page', () => {
    wrapper.find('CaloriesForm').prop('onSubmit')(calorie);
    expect(historySpy.push).toHaveBeenCalledWith('/');
    expect(startEditCalorieSpy).toHaveBeenCalledWith(calorie.id, calorie);
});

test('should envoke onRemove on button click', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenCalledWith('/');
    
    expect(startRemoveCalorieSpy).toHaveBeenCalledWith({id: calorie.id});
});