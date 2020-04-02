import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByCalories, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';
// import {DateRangePicker} from 'rsuite';

export class CaloriesListFilter extends React.Component {
    state = {
        calenderFocused : null
    }

    handleTextChange = (e) => {
        const text= e.target.value;
        this.props.setTextFilter(text);
    }

    handleSortByChange = (e) => {
        if(e.target.value === 'date'){
            this.props.sortByDate();
        }else if(e.target.value === 'calories'){
            this.props.sortByCalories();
        }
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({calenderFocused})); 
    }

    render() {
        return (
                // <div className="burgermenu">
                //     <input type="checkbox" className="toggler" />
                //     {/* The checkbox so that we can show the menu when we click this checkbox. */}
                //     <div className="hamburger"><div></div></div>
                //     {/* THe hamburger container that will contain the actual three lines. */}
                // </div>
                
            <div className="listfilter">
                    <div className="listfilter__items">
                        <input className="listfilter__input" type="text" value={this.props.filters.text}
                        onChange={this.handleTextChange} placeholder="Filter by Text"/>
                        <select  className="listfilter__select"
                        value={this.props.filters.sortBy}
                        onChange={this.handleSortByChange}
                        >
                            <option value="date">Sort By Date</option>
                            <option value="calories">Sort By Calories</option>
                        </select>
                    </div>
                    <div>
                        <DateRangePicker
                            startDateId="MyDatePickerStartId"
                            endDateId="MyDatePickerEndId"
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calenderFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}/>
                    </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByCalories: () => dispatch(sortByCalories()),
        sortByDate: () => dispatch(sortByDate()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaloriesListFilter);