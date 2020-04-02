import React from 'react';
import {Link} from 'react-router-dom';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';

export const Header = ({startLogout}) => (
    <div className="header__container">
        <div className="header__container__linkcontainer">
            <Link to='/'><h1>Calorie Freak</h1></Link>
            <h4>Stay Fit Stay Healthy</h4>
        </div>
        <div>
            <button className="button button--header" onClick={startLogout}>Log Out</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);