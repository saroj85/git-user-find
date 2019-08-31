import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            text: "",
            error: false
        }
    }

    // static PropTypes = {
    //     SearchUser : PropTypes.func.isRequired,
    // }

    handlerChange = (event) => this.setState({ [event.target.name]: [event.target.value] })

    submit = (e) => {
        e.preventDefault();
        if (this.state.text === "") {
            // this.setState({ error: true });
            this.props.setAlert("please Enter Somthing", 'light');
        }

        else {
            this.props.SearchUser(this.state.text)
            // this.props.setAlert("");
            // console.log(this.state.text)
            this.setState({ text: "" });
            this.setState({ error: false });
        }
    }
    render() {

        const {showClear, clearUser} = this.props;
        return (
            <div className="input_search_main">
                {this.state.error && <p className="error">Please Enter Search Value</p>}
                <input
                    type="text"
                    name="text"
                    placholder="Search User"
                    className="input_search"
                    onChange={this.handlerChange}
                    value={this.state.text}
                    autoComplete="off"
                />
                <input type="button" className="btn search_btn" value="search" onClick={this.submit} />
                {showClear && <button onClick={clearUser} className="btn">Clear User</button>}
               
            </div>
        );
    }
}

export default Search;