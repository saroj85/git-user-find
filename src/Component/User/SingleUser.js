import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Repos from './Repos/Repos';

class SingleUser extends Component {

    componentDidMount=() =>{
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login)
    }
    render() {
        const {
            login,
            avatar_url,
            url ,
            html_url,
            name,
            company,
            location,
            bio,
            public_repos,
            public_gists,
            followers,
            following,
            created_at,
            updated_at,
            hireable,
        } = this.props.user;
        const repos  = this.props;
        // console.log("props", repos)
        return (
            <div className='single_user_card'>
                <img src={avatar_url} style={{width:'70px'}}/>
                <div>
                <i className={`fa fa-check-circle-o ${hireable ? "green" : "red"}`} aria-hidden="true"></i>

                </div>
                <h1>{name}</h1>
                <p>Bio :{bio}</p>
                {/* <Link to={html_url} >View on Git Hub</Link> */}
                <p>Location :{location}</p>
                <p>Comapny Name:  {company}</p>
                <Repos repos={repos.repos}/>
            </div>
        );
    }
}

export default SingleUser;