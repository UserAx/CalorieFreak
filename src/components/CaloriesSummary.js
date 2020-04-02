import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import caloriesSelector from '../selector/calories';
import caloriesTotal from '../selector/caloriestotal';

export const CaloriesSummary = ({caloriesCount, caloriesTotal}) => (
    <div className="summary__container">
        <div>
            <h3>Viewing <span>{caloriesCount}</span>, a total of {caloriesTotal/100}
            {(caloriesTotal>0)?' caloires':' calorie'}.</h3>
        </div>
        <div>
            <Link className="button summary_container__button--link" to='/addcalories'>Add Record</Link>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    const visibleCalories = caloriesSelector(state.calories, state.filters);
    return {
        caloriesCount: visibleCalories.length,
        caloriesTotal: caloriesTotal(visibleCalories)
    }
};

export default connect(mapStateToProps)(CaloriesSummary);
