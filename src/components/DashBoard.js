import React from 'react';
import CaloriesList from './CaloriesList';
import CaloriesListFilter from './CaloriesListFilter';
import CaloriesSummary from './CaloriesSummary';

const DashBoard = () => (
    <div>
        <CaloriesSummary />
        <CaloriesListFilter/>
        <CaloriesList />
    </div>
);

export default DashBoard;