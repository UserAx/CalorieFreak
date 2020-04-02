import React from 'react';
import {SingleDatePicker} from 'react-dates';
import moment from 'moment';

export class CaloriesForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            foodname: props.calorie ? props.calorie.foodname : '',
            servings: props.calorie ? (props.calorie.servings).toString() : '',
            caloriesAmount: props.calorie ? (props.calorie.caloriesAmount / 100).toString() : '',
            createdAt: props.calorie ? moment(props.calorie.createdAt) : moment(),
            description: props.calorie ? props.calorie.description : '',
            calanderFocus: false,
            error: undefined
        }
    }

    handleFoodNameChange = (e) => {
        const foodname = e.target.value;
        this.setState(() => ({
            foodname 
        }));
    };

    handleCaloriesChange = (e) => {
        const caloriesAmount = e.target.value;
        if(!caloriesAmount || caloriesAmount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(() => ({caloriesAmount}));
        }
    };

    handleDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=> ({description}));
    };

    handleServingChange = (e) => {
        const servings = e.target.value;
        if(!servings || servings.match(/^\d{1,}?$/))
        this.setState(() => ({servings}));
    };

    handleDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}));
        }
    };

    handleFocusChange = ({focused}) => {
        this.setState(() => ({calanderFocus: focused}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.foodname || !this.state.servings || !this.state.caloriesAmount){
            this.setState(() => ({error: 'Please fill in the foodname, servings and calories properly before submitting.'}));
        }else {
            this.setState(() => ({error: undefined}));
            this.props.onSubmit({
                //This function is passed from AddExpense component and edit editExpense component.
                //And here it will get the necessary values.
                foodname: this.state.foodname,
                servings: parseInt(this.state.servings),
                description: this.state.description,
                caloriesAmount: parseFloat(this.state.caloriesAmount, 10) * 100,
                //the 10 on (this.state.amount, 10), only returns the last two digits. 
                createdAt: this.state.createdAt.valueOf()
            });
        };
    }
    
    render() {
        return (
            <form className="caloriesform__container" onSubmit={this.onSubmit}>
                {this.state.error && <p className="caloriesform__error">{this.state.error}</p>}
                <input className="caloriesform__input" type="text" placeholder="What food you had today?" autoFocus 
                value={this.state.foodname} onChange={this.handleFoodNameChange}/>
                <input className="caloriesform__input" type="text" placeholder="No. of Servings" value={this.state.servings}
                onChange={this.handleServingChange}/>
                <input className="caloriesform__input"
                type="text" placeholder="I am not a psychic. Tell me how much calories you consumed."
                value={this.state.caloriesAmount} onChange={this.handleCaloriesChange}/>
                <SingleDatePicker
                date = {this.state.createdAt}
                onDateChange = {this.handleDateChange}
                focused = {this.state.calanderFocus}
                onFocusChange = {this.handleFocusChange}
                numberOfMonths = {1}
                isOutsideRange = {() => false}
                />
                <textarea className="caloriesform__textarea" placeholder="Extra notes here." 
                value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                <div className="button--addcalories">
                    <button className="button button--addcalories--extra" >Save</button>
                </div>
            </form>
        );
    }
}
export default CaloriesForm;