export const setTextFilter = (text = '') => ({
    type: 'SET_FILTER_TEXT',
    text
});

export const sortByCalories = () => ({
    type: 'SORT_BY_CALORIES'
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});