import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {validfilter, defaultfilter} from '../fixtures/filters';
import {CaloriesListFilter} from '../../components/CaloriesListFilter';

let setTextFilterSpy, sortByCaloriesSpy, sortByDateSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() => {
    setTextFilterSpy = jest.fn();
    sortByCaloriesSpy = jest.fn();
    sortByDateSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(<CaloriesListFilter 
        filters={defaultfilter}
        setTextFilter={setTextFilterSpy}
        sortByCalories={sortByCaloriesSpy}
        sortByDate={sortByDateSpy}
        setStartDate={setStartDateSpy}
        setEndDate={setEndDateSpy}
        />);
});

test('should render calories list filter properly', () => {
    wrapper.setProps({
        filters: validfilter
    });
    expect(wrapper).toMatchSnapshot();
});

test('should set filter text properly', () => {
    const filterText = 'sjj';
    wrapper.find('input').simulate('change', {
        target: {value: filterText}
    });
    expect(setTextFilterSpy).toHaveBeenCalledWith(filterText);
});

test('should set sortBy to calories', () => {
    wrapper.find('select').simulate('change', {
        target: {value: 'calories'}
    });
    expect(sortByCaloriesSpy).toHaveBeenCalled();
});

test('should set sortBy to date', () => {
    wrapper.find('select').simulate('change', {
        target: {value: 'date'}
    });
    expect(sortByDateSpy).toHaveBeenCalled();
});

test('should set startDate and endDate on onDatesChange', () => {
    const startDate= moment();
    const endDate = moment().add(5, 'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate, endDate
    });
    expect(setStartDateSpy).toHaveBeenCalledWith(startDate);
    expect(setEndDateSpy).toHaveBeenCalledWith(endDate);
});

test('should set focus state on onFocusChange', () => {
    const focusState= 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focusState);
    expect(wrapper.state('calenderFocused')).toBe(focusState);
});