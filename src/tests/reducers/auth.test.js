import authReducer from '../../reducers/auth';

test('should set up auth reducer for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '1230'
    }
    const state = authReducer({}, action);
    expect(state.uid).toBe('1230');
});

test('should set up auth reducer for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: '1230'}, action);
    expect(state).toEqual({});
});