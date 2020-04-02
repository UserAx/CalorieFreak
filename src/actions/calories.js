import database from '../firebase/firebase';

//To add new calories record
export const addCalorie = (calorie) => ({
    type: 'ADD_CALORIE',
    calorie
});

export const startAddCalorie = (calorieData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            foodname = '',
            servings = '',
            caloriesAmount = 0,
            createdAt = 0,
            description = ''
        } = calorieData;
        const calorie = {foodname, servings, caloriesAmount, createdAt, description};
        return database.ref(`users/${uid}/calories`).push(calorie).then((ref) => {
            dispatch(addCalorie({
                   id: ref.key,
                    ...calorie
                }));
            });
        }
}

//To remove calories record
export const removeCalorie = ({id} = {}) => ({
    type: 'REMOVE_CALORIE',
    id
});

export const startRemoveCalorie = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/calories/${id}`).remove().then(() => {
            dispatch(removeCalorie({id}));
        });
    };
};

export const startEditCalorie = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/calories/${id}`).update(updates).then(() => {
            dispatch(editCalorie(id, updates));
        });
    };
};

//To edit a calories record
export const editCalorie = (id, updates) => ({
    type: 'EDIT_CALORIE',
    updates,
    id
});

export const startSetCalories = ( ) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/calories`).once('value').then((snapshot) => {
        const calories = [];
        snapshot.forEach((childSnapshot) => {
          calories.push({id: childSnapshot.key,
                        ...childSnapshot.val()});
        });
        dispatch(setCalorie(calories));
      });
    }
}

//To get a calories record from firebase to display on the page
export const setCalorie = (calories) => ({
    type: 'SET_CALORIES',
    calories
});