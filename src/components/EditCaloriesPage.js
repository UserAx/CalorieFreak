import React from 'react';
import { connect } from 'react-redux';
import CaloriesForm from './CaloriesForm';
import { startEditCalorie, startRemoveCalorie } from '../actions/calories';

export class EditCaloriesPage extends React.Component{
    onSubmit = (calorie) => {
        this.props.startEditCalorie(this.props.calorie.id, calorie);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.startRemoveCalorie({id: this.props.calorie.id});
        this.props.history.push('/');
    }
    render() {
        return (
                <div>
                    <CaloriesForm calorie = {this.props.calorie} onSubmit={this.onSubmit}/>
                    <div className="button--editcalories">
                            <button className="button button--editcalories--extra" onClick={this.onRemove}>Remove</button>
                    </div>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditCalorie: (id, calorie) => dispatch(startEditCalorie(id, calorie)),
        startRemoveCalorie: (id) => dispatch(startRemoveCalorie(id))
    }
}

const mapStateToProps = (state, props) => {
    return {
        calorie: state.calories.find((calorie) => {return calorie.id === props.match.params.id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCaloriesPage);