import {
    FETCH_REPO_LIST_LOADING,
    FETCH_REPO_LIST_DONE,
    FETCH_REPO_LIST_ERROR,
    SEARCH_REPO_LIST_LOADING,
    SEARCH_REPO_LIST_DONE,
    SEARCH_REPO_LIST_ERROR
} from '../actions/types';

const initialState = {
    loading: false,
    repos: [],
    searching: false,
    results: [],
    error: null,
};

export default (reduxState = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case FETCH_REPO_LIST_LOADING:
            return {
                ...reduxState,
                loading: true,
            }
        case FETCH_REPO_LIST_DONE:
            return {
                ...reduxState,
                loading: false,
                repos: payload.repos,
            }
        case FETCH_REPO_LIST_ERROR:
            return {
                ...reduxState,
                error: payload.error,
                loading: false,
            }
        case SEARCH_REPO_LIST_LOADING:
            return {
                ...reduxState,
                searching: true,
            }
        case SEARCH_REPO_LIST_DONE:
            return {
                ...reduxState,
                searching: false,
                results: payload.results,
            }
        case SEARCH_REPO_LIST_ERROR:
            return {
                ...reduxState,
                error: payload.error,
                searching: false,
            }
        default:
            return reduxState
    }
}
