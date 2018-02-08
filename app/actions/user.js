import * as actionTypes from '../constants/user'
import {user_ashx} from "../constants/urls";

const requestPosts = () => ({
  type: actionTypes.USERCHECK_REQUEST_POST
})

const received = (name,phone) =>({
  type: actionTypes.USERCHECK_RECEIVED,
  name,
  phone
})

export const receivedError = (err_msg) =>({
  type: actionTypes.USERCHECK_ERROR,
  err_msg
})

const fetchPosts = ({name,phone,score}) => dispatch => {
  dispatch(requestPosts())
  let url = `${user_ashx}?name=${name}&phone=${phone}&Fraction=${score}`

  return fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        if(json.code==='1'){
          dispatch(received(name,phone))
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

export const clearErr = ()=>({
 type:actionTypes.USER_CLEARERROR
})
