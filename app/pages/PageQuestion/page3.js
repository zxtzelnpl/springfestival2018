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
        title:'5、漂亮50中下列那只股票不在“茅五格”之列？',
        choices:[
            '贵州茅台',
            '山西汾酒',
            '五粮液',
            '格力电器'
        ],
        key:4
      },
      {
        title:'6、2017年A股“千年大计”指的是？',
        choices:[
            '雄安新区设立',
            '粤港澳大湾区',
            '上海自贸区',
            '一带一路'
        ],
        key:5
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
            <Link to="/page2" className="prev">
              上一题
            </Link>
            <Link to="/page4" className="next">
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
