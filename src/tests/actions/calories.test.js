import {
    addCalorie,
    editCalorie,
    removeCalorie,
    setCalorie,
    startSetCalories,
    startEditCalorie,
    startRemoveCalorie,
    startAddCalorie
} from '../../actions/calories';
import calories from '../fixtures/calories';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid= 'acv';
const defaultUID = {auth: {uid}};

beforeEach((done) => {
    const calorieData = {};
    calories.map(({id, description, foodname, servings, caloriesAmount, createdAt}) => 
                calorieData[id] = {description, foodname, servings, caloriesAmount, createdAt});
    database.ref(`users/${uid}/calories`).set(calorieData).then(() => done());
});

//For store actions:
test('should run add action for calories', () => {
    const calorie = calories[0];
    const action = addCalorie(calorie);
    expect(action).toEqual({
        type: 'ADD_CALORIE',
        calorie
    }); 
});

test('should run edit action for calories', () => {
    const calorie = calories[0];
    const id = calorie.id;
    const action = editCalorie(id, {description: 'Just edited now.'});
    expect(action).toEqual({
        type: 'EDIT_CALORIE',
        id,
        updates: {
            description:  'Just edited now.'
        }
    });
});

test('should run remove action for calories', () => {
    const calorie = calories[0];
    const id = calorie.id;
    const action = removeCalorie(calorie);
    expect(action).toEqual({
        type: 'REMOVE_CALORIE',
        id
    }); 
});

test('should run set action for calories', () => {
    const action = setCalorie(calories);
    expect(action).toEqual({
        type: 'SET_CALORIES',
        calories
    }); 
});

//For firebase actions:
test('should set up startAddCalorie action to add calorie to firebase', (done) => {
    const store = createMockStore(defaultUID);
    const calorie = {
        description: 'Dinner',
        foodname: 'Roti',
        caloriesAmount: 14253,
        servings: 3,
        createdAt: 1425325635
    };
    store.dispatch(startAddCalorie(calorie)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_CALORIE',
            calorie: {
                id: expect.any(String),
                ...calorie
            }
        });
        return database.ref(`users/${uid}/calories/${action[0].calorie.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(calorie);
        done();
    });
});

test('should set up starteditCalorie action to edit calorie to firebase', (done) => {
    const store = createMockStore(defaultUID);
    const id = calories[1].id;
    store.dispatch(startEditCalorie(id, {description: 'edited just now for firebase'})).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'EDIT_CALORIE',
            id,
            updates: {
                description: 'edited just now for firebase'
            }
        });
        return database.ref(`users/${uid}/calories/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().description).toEqual('edited just now for firebase');
        done();
    })
});

test('should set up startRemoveCalorie to remove calorie from database', (done) => {
    const store = createMockStore(defaultUID);
    const id = calories[1].id;
    store.dispatch(startRemoveCalorie({id})).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'REMOVE_CALORIE',
            id
        });
        return database.ref(`users/${uid}/calories/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should set up startSetCalorie/fetch-data from database', (done) => {
    const store = createMockStore(defaultUID);
    store.dispatch(startSetCalories()).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'SET_CALORIES',
            calories
        });
    });
    done();
});