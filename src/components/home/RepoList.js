import React, { useState, useEffect, useCallback } from 'react';
import Pagination from './Pagination';
import RepoInfo from "./RepoInfo";

import { connect } from 'react-redux';
import { fetchRepos } from '../../actions/index';

const RepoList = (props) => {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(6);

    useEffect(() => {

        async function loadRepos() {

            await props.fetchRepos();

        }

        loadRepos();

    }, []);

    const paginate = useCallback(
        (type) => {

            if (type === 'next') {

                setStart(start + 5);
                setEnd(end + 5);

            } else if (type === 'prev') {

                setStart(start - 5);
                setEnd(end - 5);

            }

        },
        [start, end],
    )

    const { repos, loading } = props.repos;

    return (
        <div className="col-xl-12">
            {loading ?
                (<div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>) :
                (<RepoInfo repos={repos.slice(start, end)} />)
            }
            <Pagination
                start={start}
                end={end}
                data_length={repos.length}
                paginate={paginate}
            />
        </div>
    );

}

const mapStateToProps = ({ repos }) => ({
    repos,
})
const mapDispatchToProps = () => ({
    fetchRepos,
})
export default connect(mapStateToProps, mapDispatchToProps())(RepoList);
