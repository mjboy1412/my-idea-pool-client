import { AuthApi } from '../../api';

import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from '../../constants';

function requestUserInfo() {
  return {
    type: GET_USER_REQUEST,
    isFetching: true,
  };
}

function userInfoSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    isFetching: false,
    user,
  };
}

function userInfoError(errorMessage) {
  return {
    type: GET_USER_FAILURE,
    isFetching: false,
    errorMessage,
  };
}

export const getUserInfo = dispatch => state => {
  dispatch(requestUserInfo());
  AuthApi.getUserInfo(state.auth.access_token)
    .then(res => {
      if (res => {
        if(res.reason) throw new ErrorEvent(res.reason);
        dispatch(user.InfoSuccess(res));
      })
    })
    .catch(err => dispatch(userInfoError(err)));
}
