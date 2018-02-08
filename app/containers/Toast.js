'use strict'

import React from 'react'
import Toast from '../components/Toast'
import {connect} from 'react-redux'
import * as userActionsFromOtherFile from "../actions/user";
import {bindActionCreators} from "redux";


function mapStateToProps (state) {
  return {
    err_msg: state.user.err_msg
  }
}

function mapDispatchToProps (dispatch) {
  return {
    userActions: bindActionCreators(userActionsFromOtherFile, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Toast)
