import React from 'react';
import SpinnerImg from '../loder.gif'
// import Fragment from 'react-fragment';
// import PropTypes from 'prop-types';


const Spinner = () => {
    return (
       <div style={{textAlign:'center'}}>
            <img src={SpinnerImg} style={{ width: '50px', margin: 'auto' }} />
       </div>

    );
};


export default Spinner;