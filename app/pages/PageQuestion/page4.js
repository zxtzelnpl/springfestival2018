'use strict'

import './index.less'
import React from 'react'
import {connect} from 'react-redux'
import * as userActionsFromOtherFile from "../../actions/user";
import {bindActionCreators} from "redux";
import {Link} from 'react-router-dom'
import Question from '../../components/Question'
import img_logo from '../../static/img/logo.png'



class Page extends React.Component{
  constructor (){
    super()
    this.questions=[
      {
        title:'7、2017年各大指数涨幅最大的是？',
        choices:[
            '中证1000',
            '上证指数',
            '上证50',
            '沪深300'
        ],
        key:6
      },
      {
        title:'8、2017年新能源车遭到资金追捧，小金属中，涨幅最多的是？',
        choices:[
            '锂',
            '钛',
            '锑',
            '钨'
        ],
        key:7
      }
    ]
    this.changeScore=this.changeScore.bind(this)
  }

  componentDidMount(){

  }

  changeScore(number,key){
    let _score = this.props.user.score;
    let score = [..._score]
    score[key] = number
    this.props.userActions.getScore(score)
  }

  render(){
    return (
        <div className="page-one">
          <div className="blank-h-40" />
          <div className="logo"><img src={img_logo} /></div>
          <div className="blank-h-120" />
          <Question
              question={this.questions[0]}
              changeScore = {this.changeScore}
              number = {this.props.user.score[this.questions[0].key]}
          />
          <div className="blank-h-80" />
          <Question
              question={this.questions[1]}
              changeScore = {this.changeScore}
              number = {this.props.user.score[this.questions[1].key]}
          />
          <div className="blank-h-100" />
          <div className="btn-box">
            <Link to="/page3" className="prev">
              上一题
            </Link>
            <Link to="/page5" className="next">
              下一题
            </Link>
          </div>
          <div className="blank-h-40" />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user:state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionsFromOtherFile, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Page)
