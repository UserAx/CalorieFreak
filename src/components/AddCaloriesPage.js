import React from 'react';
import { connect } from 'react-redux';
import CaloriesForm from './CaloriesForm';
import {startAddCalorie} from '../actions/calories';

export class AddCaloriesPage extends React.Component {    
    onSubmit = (calorie) => {
        this.props.startAddCalorie(calorie);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div>
                    <CaloriesForm onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        startAddCalorie: (calorie) => {
            dispatch(startAddCalorie(calorie));
        }
    }
}

export default connect(undefined, mapDispatchToProps)(AddCaloriesPage);