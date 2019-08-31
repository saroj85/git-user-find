import React from 'react';
import UserCard from './UserCard';
import Spinner from '../Layout/Spinner';
// import PropTypes from 'prop-types'


const User = ({ users, loading }) => {
    if (loading) {
        return (
            <Spinner />
        )
    }

    else {
        return (
            <div className="card_row">
                {users.map((user, index) => <UserCard key={user.id} user={user} />)}
            </div>
        );
    }

}


// User.PropTypes = {
//     users: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired
// }
export default User;