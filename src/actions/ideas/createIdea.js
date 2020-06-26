import { IdeasApi } from '../../api';

import {
  CREATE_IDEA_REQUEST,
  CREATE_IDEA_SUCCESS,
  CREATE_I,
} from '../../constants';

function requestCreateIdea() {
  return {
    type: CREATE_IDEA_REQUEST,
    isFetching: true,
  };
}

function createIdeaSuccess(tempId, idea) {
  return {
    type: CREATE_IDEA_SUCCESS,
    isFetching: false,
    tempId,
    idea,
  };
}

function createIdeaError(errorMessage) {
  return {
    type: CREATE_IDEA_FAILURE,
    isFetching: false,
    errorMessage,
  };
}

function createIdea = (
  tempId,
  content,
  impact,
  ease,
  confidence
 ) => dispatch => {
  dispatch(requestCreateIdea());

  IdeasApi.createIdea(content, impact, ease, confidence)
    .then(res => {
      if(res.reason) throw new Error(res.reason);
      dispatch(createIdeaSuccess(tempId, res));
    })
    .catch(err => dispatch(createIdeaError(err)));
}
