import {firebase, googleAuthProvider} from '../firebase/firebase';


//I get this uid value from our main entry js file where firebase checks for any logged in user.
export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    }
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
};

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}