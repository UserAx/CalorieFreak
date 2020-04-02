import moment from 'moment';
export default [{
    id: '1',
    foodname: 'Pasta',
    servings: 5,
    caloriesAmount: 15024.25,
    description: 'Lunch for today.',
    createdAt: moment(0).valueOf()
},{
    id: '2',
    foodname: 'Momo',
    servings: 2,
    caloriesAmount: 1504.25,
    description: 'Snack.',
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    foodname: 'Rice and Pickels',
    servings: 2,
    caloriesAmount: 150244.25,
    description: 'Dinner.',
    createdAt: moment(0).add(4, 'days').valueOf()
}]