import filtersReducer from '../../reducers/filters';
import {defaultfilter} from '../fixtures/filters';
import moment from 'moment';

test('should setup default filter correctly', () => {
    const action = {
        type: '@@INIT'
    }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should setup text filter correctly', () => {
    const action = {
        type: 'SET_FILTER_TEXT',
        text: 'M'
    };
    const state = filtersReducer(defaultfilter, action);
    expect(state.text).toBe('M');
});

test('should sort by calories correctly', () => {
    const action = {
        type: 'SORT_BY_CALORIES'
    };
    const state = filtersReducer(defaultfilter, action);
    expect(state.sortBy).toBe('calories');
});

test('should sort by date correctly', () => {
    const action = {
        type: 'SORT_BY_DATE'
    };
    const state = filtersReducer(defaultfilter, action);
    expect(state.sortBy).toBe('date');
});

test('should set startDate correctly', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0).add(2, 'days').valueOf()
    };
    const state = filtersReducer(defaultfilter, action);
    expect(state.startDate).toBe(moment(0).add(2, 'days').valueOf());
});

test('should set endDate correctly', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0).add(4, 'days').valueOf()
    };
    const state = filtersReducer(defaultfilter, action);
    expect(state.endDate).toBe(moment(0).add(4, 'days').valueOf());
});