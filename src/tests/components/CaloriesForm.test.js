import React from 'react';
import CaloriesForm  from '../../components/CaloriesForm';
import {shallow} from 'enzyme';
import calories from '../fixtures/calories';
import moment from 'moment';

test('should render Expense Form correctly', () => {
    const wrapper = shallow(<CaloriesForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form correctly using data', () => {
    const calorie = calories[0];
    const wrapper = shallow(<CaloriesForm calorie={calorie}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error by expense form for invalid data', () => {
    const wrapper = shallow(<CaloriesForm/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () =>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description for handleDescriptionChange', () => {
    const description = 'Test for set description'; 
    const wrapper = shallow(<CaloriesForm />);
    wrapper.find('textarea').simulate('change', {
        target: {value: description}
    });
    expect(wrapper.state('description')).toBe(description);
});

test('should set foodname for handleFoodNameChange', () => {
    const foodname = 'Test for set foodname'; 
    const wrapper = shallow(<CaloriesForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {value: foodname}
    });
    expect(wrapper.state('foodname')).toBe(foodname);
});

test('should set caloriesAmount for handleCaloriesChange', () => {
    const caloriesAmount = '12.52'; 
    const wrapper = shallow(<CaloriesForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: {value: caloriesAmount}
    });
    expect(wrapper.state('caloriesAmount')).toBe(caloriesAmount);
});

test('should set servings for handleServingChange', () => {
    const servings = '5'; 
    const wrapper = shallow(<CaloriesForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value: servings}
    });
    expect(wrapper.state('servings')).toBe(servings);
});

test('should set caloriesAmount for handleCaloriesChange with Invalid Data', () => {
    const caloriesAmount = '12.52456'; 
    const wrapper = shallow(<CaloriesForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: {value: caloriesAmount}
    });
    expect(wrapper.state('caloriesAmount')).toBe('');
});

test('should set servings for handleCaloriesChange with Invalid Data', () => {
    const servings = '12.52456'; 
    const wrapper = shallow(<CaloriesForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: {value: servings}
    });
    expect(wrapper.state('servings')).toBe('');
});

test('should call onSubmit prop for valid data', () => {
    const onSubmit = jest.fn();
    const calorie = calories[0];
    const wrapper = shallow(<CaloriesForm calorie={calorie} onSubmit={onSubmit}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(onSubmit).toHaveBeenCalledWith({
        description: calorie.description,
        createdAt: calorie.createdAt,
        foodname: calorie.foodname,
        caloriesAmount: calorie.caloriesAmount,
        servings: calorie.servings
    });
});

test('should set new date for singledatepicker', () => {
    const now = moment();
    const wrapper = shallow(<CaloriesForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set onFocus for singledatepicker', () => {
    const focus = true;
    const wrapper = shallow(<CaloriesForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')(focus);
    expect(wrapper.state('calanderFocus')).toBe(focus);
});