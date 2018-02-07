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
        title:'9、下列哪位不是《选股牛人》明星牛人？',
        choices:[
            '吴伟伟',
            '马鑫',
            '周煜',
            '吕向召'
        ],
        key:8
      },
      {
        title:'10、又到年报披露时，下列哪些不是A股“怪像”？',
        choices:[
            '獐子岛扇贝又跑路',
            '皇台酒业库存“蒸发”100万瓶酒',
            '巴士在线子公司老板不见了',
            '上证50大幅上涨'
        ],
        key:9
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
            <Link to="/result" className="prev">
              提交
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
