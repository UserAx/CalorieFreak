import caloriesSelector from '../../selector/calories';
import calories from '../fixtures/calories';
import moment from 'moment';

test('should filter by text', () => {
    const state = caloriesSelector(calories, {
        text: 'Mo', 
        sortBy: 'date', 
        startDate: undefined,
        endDate: undefined
    });
    expect(state).toEqual([calories[1]]);
});

test('should filter by startDate', () => {
    const state = caloriesSelector(calories, {
        text: '', 
        sortBy: 'date', 
        startDate: moment(0),
        endDate: undefined
    });
    expect(state).toEqual([calories[2], calories[0]]);
});

test('should filter by endDate', () => {
    const state = caloriesSelector(calories, {
        text: '', 
        sortBy: 'date', 
        startDate: undefined,
        endDate: moment(0)
    });
    expect(state).toEqual([calories[0], calories[1]]);
});