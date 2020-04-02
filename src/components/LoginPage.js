import React from 'react';
import {startLogin} from '../actions/auth';
import {connect} from 'react-redux';

export const LoginPage = ({ startLogin }) => (
    <div className="loadingPage">
        <div className="center_container">
            {/* <div className="loadingPage__container__title">
            </div> */}
            <h1>Calorie Freak</h1>
            <p>It is time to stay fit and stay healthy.</p>
            <button className="button button--LoginPage" onClick={startLogin}>Log In</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);