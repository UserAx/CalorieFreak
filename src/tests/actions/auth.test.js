import {login, logout} from '../../actions/auth';

test('should start login action correctly', () => {
    const action = login('123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid:'123'
    })
});

test('should start logout action correctly', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
});