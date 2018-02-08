'use strict'

import './WeiXinHide.less'
import React from 'react'
import weixin from '../static/weixin'
import {share_weixin} from '../constants/urls'

class WeiXinHide extends React.Component{

  constructor (){
    super()
  }

  componentDidMount(){
    fetch(share_weixin)
        .then(res=>res.json())
        .then(json=>{
          weixin(json)
        })
        .catch(err=>{
          console.log(err)
        })
  }

  render(){
    return (
        <div className="weixin-hide"/>
    )
  }
}

export default WeiXinHide
