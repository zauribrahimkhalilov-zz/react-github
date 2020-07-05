import React from 'react';
import PropTypes from 'prop-types';
import { Throttle } from 'react-throttle';

const SearchInput = ({ updateValue }) => {

    return (
        <Throttle time="3000" handler="onChange">
            <input onChange={updateValue} className="form-control" placeholder="Search" />
        </Throttle>
    );

}
SearchInput.propTypes = {
    updateValue: PropTypes.func
};
export default SearchInput;
