import * as actionTypes from '../constants/user'

export const initialState = {
  isFetching: false,
  received:false,
  name:null,
  phone:null,
  score:[],
  err_msg:null
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERCHECK_REQUEST_POST:
      return {
        ...state,
        isFetching: true,
        err_msg:null
      }
    case actionTypes.USERCHECK_RECEIVED:
      return {
        ...state,
        isFetching: false,
        received:true,
        phone: action.phone,
        name:action.name,
        err_msg:null
      }
    case actionTypes.USERCHECK_ANSWER:
      return {
        ...state,
        score:action.score
      }
    case actionTypes.USERCHECK_ERROR: //如果请求发生意外，则按此处理
      return {
        ...state,
        isFetching: false,
        err_msg:action.err_msg
      }
    case actionTypes.USER_CLEARERROR:
      return {
          ...state,
        err_msg:null
      }
    default:
      return state
  }
}
