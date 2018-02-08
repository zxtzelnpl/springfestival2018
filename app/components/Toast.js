'use strict'

import './Toast.less'

import React from 'react'

class Toast extends React.Component{
  constructor (){
    super()
    this.timeControl = null;
  }

  componentDidMount(){
    console.log(this.props.err_msg)
  }

  componentDidUpdate(){
    console.log(this.props.err_msg)
  }

  onTransitionEnd(e){
    if(e.target.className==='toast show'){
      clearTimeout(this.timeControl)
      this.timeControl = setTimeout(()=>{
        this.props.userActions.clearErr()
      },1500)
    }

  }

  componentWillUnmount(){
    clearTimeout(this.timeControl)
  }

  render(){
    let className,
        err_msg = this.props.err_msg;

    if(err_msg){
      className = "toast show"
    }
    else{
      className = "toast hide"
    }

    return (
        <div className={className} onTransitionEnd={this.onTransitionEnd.bind(this)}>
          {err_msg}
        </div>
    )
  }
}

export default Toast
