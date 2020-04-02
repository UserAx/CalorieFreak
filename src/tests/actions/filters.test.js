import {
    setTextFilter,
    sortByCalories,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters';
import moment from 'moment';

test('should set text filter', () => {
    const action = setTextFilter('Mo');
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        text: 'Mo'
    })
});

test('should set sortBy to date filter', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('should set sortBy to calories filter', () => {
    const action = sortByCalories();
    expect(action).toEqual({
        type: 'SORT_BY_CALORIES'
    })
});

test('should set startDate filter', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should set endDate filter', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});