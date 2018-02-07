'use strict'

import './index.less'
import React from 'react'
import {connect} from 'react-redux'
import * as userActionsFromOtherFile from "../../actions/user";
import {bindActionCreators} from "redux";
import {Link} from 'react-router-dom'
import Question from '../../components/Question'
import img_logo from '../../static/img/logo.png'


class Page extends React.Component {
  constructor () {
    super()
    this.questions = [
      {
        title: '1、年度涨幅最高的次新股是？',
        choices: [
          '金牌厨柜',
          '寒锐钴业',
          '华大基因',
          '欧派家居'
        ],
        key: 0
      },
      {
        title: '2、360借壳那只股票？',
        choices: [
          '上海九百',
          '江南嘉捷',
          '科大讯飞',
          '中葡股份'
        ],
        key: 1
      }
    ]
    this.changeScore = this.changeScore.bind(this)
  }

  componentDidMount () {

  }

  changeScore (number, key) {
    let _score = this.props.user.score;
    let score = [..._score]
    score[key] = number
    this.props.userActions.getScore(score)
  }

  render () {
    return (
        <div className="page-one">
          <div className="blank-h-40"/>
          <div className="logo"><img src={img_logo}/></div>
          <div className="blank-h-120"/>
          <Question
              question={this.questions[0]}
              changeScore={this.changeScore}
              number={this.props.user.score[this.questions[0].key]}
          />
          <div className="blank-h-80"/>
          <Question
              question={this.questions[1]}
              changeScore={this.changeScore}
              number={this.props.user.score[this.questions[1].key]}
          />
          <div className="blank-h-100"/>
          <div className="btn-box">
            <Link to="/page2" className="next">下一题</Link>
          </div>
          <div className="blank-h-40" />
        </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    userActions: bindActionCreators(userActionsFromOtherFile, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Page)
