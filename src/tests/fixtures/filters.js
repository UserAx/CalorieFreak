import moment from 'moment';
export const defaultfilter = {
    text: '',
    sortBy: '',
    startDate: moment(0),
    endDate: moment(0)
}

export const validfilter = {
    text: 'a',
    sortBy: 'calories',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days') 
}