const calorieDefaultState = [];

export default (state = calorieDefaultState, action) => {
    switch(action.type){
        case 'ADD_CALORIE': 
        return [
            ...state,
            action.calorie
        ];
        case 'SET_CALORIES': 
        return action.calories;
        case 'REMOVE_CALORIE':
        return state.filter(({id}) => id !== action.id);
        case 'EDIT_CALORIE':
        return state.map((calorie) => {
            if(calorie.id === action.id){
                return {
                    ...calorie,
                    ...action.updates
                }
            }else {
                return calorie;
            }
        });
        default:
        return state;
    }
}