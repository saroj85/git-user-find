import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Nav = ({icon}) => {
    return (
        <div>
            <div className="header">
                <div className="logo"><a href="/"><i className={icon} aria-hidden="true"></i></a></div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </div>
    );

}

Nav.defaultProps = {
    icon: "fa fa-github"
}
Nav.propTypes = {
    icon: PropTypes.string.isRequired
}

export default Nav;