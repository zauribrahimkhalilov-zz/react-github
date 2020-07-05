import {
    FETCH_REPO_LIST_LOADING,
    FETCH_REPO_LIST_DONE,
    FETCH_REPO_LIST_ERROR,
    SEARCH_REPO_LIST_LOADING,
    SEARCH_REPO_LIST_DONE,
    SEARCH_REPO_LIST_ERROR
} from './types';
import axios from 'axios';

const BASE_URL = "https://api.github.com";

export const fetchRepos = () => dispatch => {
    dispatch({ type: FETCH_REPO_LIST_LOADING })
    return axios.get(BASE_URL + '/users/zauribrahimkhalilov/repos')
        .then((response) => {
            dispatch({
                type: FETCH_REPO_LIST_DONE,
                payload: {
                    repos: response.data,
                },
            })
        })
        .catch((error) => {
            dispatch({
                type: FETCH_REPO_LIST_ERROR,
                payload: {
                    error,
                },
            })
        })
}

export const searchRepos = ({ value }) => dispatch => {
    dispatch({ type: SEARCH_REPO_LIST_LOADING })
    return axios.get(BASE_URL + `/search/repositories?q=${value}`)
        .then((response) => {
            dispatch({
                type: SEARCH_REPO_LIST_DONE,
                payload: {
                    results: response.data.items,
                },
            })
        })
        .catch((error) => {
            dispatch({
                type: SEARCH_REPO_LIST_ERROR,
                payload: {
                    error,
                },
            })
        })
}
