import React from 'react';
import spinner from '../../images/spinner.gif'

const Spinner = () => {
    return (
        <img src={spinner} style={{width: '200px', margin : 'auto', display: 'block', opacity: '0.2'}} alt="spinner" />
    )
}

export default Spinner
