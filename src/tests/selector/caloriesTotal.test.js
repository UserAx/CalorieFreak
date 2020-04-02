import caloriesTotal from '../../selector/caloriestotal';
import calories from '../fixtures/calories';

test('should add calorieAmounts correctly', () => {
    const state = caloriesTotal(calories);
    expect(state).toBe(166772.75);
});

test('should return 0 for no calories correctly', () => {
    const calories = [];
    const state = caloriesTotal(calories);
    expect(state).toBe(0);
});