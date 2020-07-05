import React from 'react';
import RepoInfo from '../home/RepoInfo';
import { connect } from 'react-redux';
import { searchRepos } from '../../actions/index';
import SearchInput from './SearchInput';

const SearchRepo = (props) => {

    const search = (value) => value.length > 0 && props.searchRepos({ value });

    const updateValue = event => search(event.target.value);

    const { results, searching } = props.repos;

    return (
        <div className="card mt-5 mb-5">
            <div className="card-header">
                <SearchInput updateValue={updateValue} />
            </div>
            <div className="card-body">
                {
                    (searching) ?
                        <h1 className="text-center">Searching...</h1>
                        :
                        (results.length > 0) && (<RepoInfo repos={results} />)
                }
            </div>
        </div>
    );

}
const mapStateToProps = ({ repos }) => ({
    repos,
})
const mapDispatchToProps = () => ({
    searchRepos,
})
export default connect(mapStateToProps, mapDispatchToProps())(SearchRepo);
