import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


const UserCard = ({ user: { avatar_url, img_alt, html_url, login } }) => {
    return (
        <div className="user_card">
            <img src={avatar_url} alt={img_alt} style={{ width: '70px' }} />
            <h3>{login}</h3>
            <div className="btn btn_primary">
                <Link to={`/user/${login}`}>More</Link>
            </div>
        </div>
    );
}

// UserCard.PropTypes = { 
//     user : PropTypes.object.isRequired,
// }

// UserCard.PropTypes = {
//     // users: PropTypes.array.isRequired,
//     // loading: PropTypes.bool.isRequired
// }
export default UserCard;


