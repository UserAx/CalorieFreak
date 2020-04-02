import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const CaloriesListItem = ({ id, foodname, caloriesAmount, createdAt }) => (
    <Link className = "calorieslistitemlink" to={`edit/${id}`}>
        <div>
            <h2 className = "calorieslistitem__title">{foodname}</h2> 
            <h5 className = "calorieslistitem__date">{moment(createdAt).format('MMMM Do, YYYY')}</h5>
        </div>
        <span className = "calorieslistitem__calories">{caloriesAmount/ 100}</span>
    </Link>
);

export default CaloriesListItem;