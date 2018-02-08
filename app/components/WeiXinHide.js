'use strict'

import './WeiXinHide.less'
import React from 'react'
import weixin from '../static/weixin'

class WeiXinHide extends React.Component{

  constructor (){
    super()
  }

  componentDidMount(){
    weixin({})
  }

  render(){
    return (
        <div className="weixin-hide"/>
    )
  }
}

export default WeiXinHide
