import React from 'react';
import {connect} from 'react-redux';
import CaloriesListItem from './CaloriesListItem';
import selectCalories from '../selector/calories';

export const CaloriesList = (props) => (
    <div className="calorielist__container">
        <div className="calorielist__header">
            <div>Foods</div>
            <div>Calories</div>
        </div>
        <div className="caloriesList__items">
            {props.calories.length > 0 ?
            (
                props.calories.map((calorie) => {
                    return <CaloriesListItem key={calorie.id} {...calorie}/>
                }) 
            ) : (
                <div className="caloriesList__items__empty">
                    <span>No Records</span>
                </div>
            )}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        calories: selectCalories(state.calories, state.filters)
    }
}

export default connect(mapStateToProps)(CaloriesList);