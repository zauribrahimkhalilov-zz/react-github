import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ start, end, data_length, paginate }) => {

    return (
        <ul className="pagination justify-content-center">
            {(start > 0) &&
                <li className="page-item">
                    <button onClick={() => paginate('prev')} className="page-link">Previous</button>
                </li>
            }
            {(end !== data_length) &&
                <li className="page-item">
                    <button onClick={() => paginate('next')} className="page-link">Next</button>
                </li>
            }
        </ul>
    )

}

Pagination.propTypes = {
    start: PropTypes.number,
    end: PropTypes.number,
    data_length: PropTypes.number,
    paginate: PropTypes.func
};

export default Pagination;
