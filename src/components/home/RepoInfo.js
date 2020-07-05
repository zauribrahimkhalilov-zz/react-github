import React from 'react';
import PropTypes from 'prop-types';

const RepoInfo = ({ repos }) => {

    return (
        <div className="row">
            {repos.map((repo) =>
                <div className="col-md-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title">{repo.name}</h4>
                            <p className="card-text">{repo.description}</p>
                            <span className="badge badge-dark mr-3">{repo.language}</span>
                            <span className="mr-3"><i className="far fa-star"></i> {repo.stargazers_count}</span>
                            <small>{repo.created_at.slice(0, 10)}</small>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}

RepoInfo.propTypes = {
    repos: PropTypes.array
};

export default RepoInfo;
