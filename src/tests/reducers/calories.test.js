import caloriesReducer from '../../reducers/calories';
import calories from '../fixtures/calories';
import moment from 'moment';

test('should initialize reducer i.e. setup default state correctly', () => {
    const state = caloriesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should add calories correctly', () => {
    const action = {
        type: 'ADD_CALORIE',
        calorie: {
            id: '4',
            foodname: 'Tea and Biscuits',
            servings: 3,
            caloriesAmount: 1024.25,
            description: 'Lunch.',
            createdAt: moment(0).add(14, 'days').valueOf()
        }
    }
    const state = caloriesReducer(calories, action);
    expect(state).toEqual([
        ...calories,
        action.calorie
    ]);
});

test('should remove calorie correctly', () => {
    const action = {
        type: 'REMOVE_CALORIE',
        id: '1'
    }
    const state = caloriesReducer(calories, action);
    expect(state).toEqual([calories[1], calories[2]]);
});

test('should not remove calorie if no id is given', () => {
    const action = {
        type: 'REMOVE_CALORIE'
    }
    const state = caloriesReducer(calories, action);
    expect(state).toEqual([calories[0], calories[1], calories[2]]);
});

test('should edit calorie correctly', () => {
    const action = {
        type: 'EDIT_CALORIE',
        id: '1',
        updates: {
            description: 'Edited through reducer test.'
        }
    }
    const state = caloriesReducer(calories, action);
    expect(state[0].description).toBe(
        'Edited through reducer test.'
    );
});

test('should not edit calorie if no id is given', () => {
    const action = {
        type: 'EDIT_CALORIE',
        updates: {
            description: 'Edited through reducer test.'
        }
    }
    const state = caloriesReducer(calories, action);
    expect(state[0].description).toBe(
        'Lunch for today.'
    );
});

test('should set calories correctly', () => {
    const action = {
        type: 'SET_CALORIES',
        calories
    }
    const state = caloriesReducer(undefined, action);
    expect(state).toEqual(action.calories);
});