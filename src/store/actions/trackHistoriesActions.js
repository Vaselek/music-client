import axios from '../../axios-api';
import {getToken} from "./usersActions";
import {push} from 'connected-react-router';


export const FETCH_TRACK_HISTORIES_SUCCESS = 'FETCH_TRACK_HISTORIES_SUCCESS';

export const fetchTrackHistoriesSuccess = trackHistories => ({type: FETCH_TRACK_HISTORIES_SUCCESS, trackHistories});

export const fetchTrackHistories = () => {
    return (dispatch, getState) => {
        const token = getState().users.user ? getState().users.user.token : getToken();
        if (!token) {
            dispatch(push('/login'));
        };
        return axios.get('/track_histories', {headers: {'Authorization': token}}).then(
            response => dispatch(fetchTrackHistoriesSuccess(response.data))
        );
    };
};



