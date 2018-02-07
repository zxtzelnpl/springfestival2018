import * as actionTypes from '../constants/user'
import {user_ashx} from "../constants/urls";

const requestPosts = () => ({
  type: actionTypes.USERCHECK_REQUEST_POST
})

const received = (check,phone,id) =>({
  type: actionTypes.USERCHECK_RECEIVED,
  check,
  phone,
  id
})

export const receivedError = (err_msg) =>({
  type: actionTypes.USERCHECK_ERROR,
  err_msg
})

const fetchPosts = ({name,phone,score}) => dispatch => {
  dispatch(requestPosts())
  let url = `${user_ashx}?name=${name}&phone=${phone}&score=${score}`

  return fetch(url)
      .then(response => response.json())
      .then(json => {
        if(json.error==='1'){
          dispatch(received(true,phone,json.data[0].id,json.data[0].prize))
        }
        else{
          dispatch(receivedError(json.msg))
        }
      })
      .catch(err=>{
        dispatch(receivedError('网络连接错误，请稍后再试'))
      })
}

const shouldFetchPosts = (state) => {
  return !state.user.isFetching;
}

export const fetchPostsIfNeeded = value => (dispatch, getState) => {
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts(value))
  }
}

export const getScore = score => ({
  type:actionTypes.USERCHECK_ANSWER,
  score:score
})
