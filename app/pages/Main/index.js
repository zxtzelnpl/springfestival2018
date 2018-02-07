'use strict'

import React from 'react'
import {Link} from 'react-router-dom'
import './index.less'

import img_logo from '../../static/img/logo.png'
import img_text1 from './img/text1.png'
import img_text2 from './img/text2.png'
import img_text3 from './img/text3.png'

class Main extends React.Component{
  constructor (){
    super()
  }

  componentDidMount(){

  }

  render(){
    return (
        <div className="main">
          <div className="blank-h-40" />
          <div className="logo"><img src={img_logo} /></div>
          <div className="text"><img src={img_text1} /></div>
          <div className="text"><img src={img_text2} /></div>
          <div className="text"><img src={img_text3} /></div>
          <div className="blank-h-60" />
          <Link className="btn" to="/page1">
            <span className="begin">参与答题</span>
          </Link>
        </div>
    )
  }
}

export default Main
