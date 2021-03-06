'use strict'
import './index.less'
import React from 'react'
import {connect} from 'react-redux'
import {trim, phoneCheck} from "../../static/tools";
import * as userActionsFromOtherFile from "../../actions/user";
import {bindActionCreators} from "redux";

import img_logo from '../../static/img/logo.png'
import img_high from './img/high.png'
import img_middle from './img/middle.png'
import img_low from './img/low.png'

const answers = [1, 1, 1, 0, 1, 0, 2, 0, 3, 3]


const HighShow = ({score}) => {
  return (
      <div className="show_box">
        <img src={img_high}/>
        <h3>{score}分！太完美了！</h3>
        <p>超级投顾奖励您5期《选股牛人-吴伟伟》</p>
        <p>祝你2018一路发发发，涨停天天抓！</p>
      </div>
  )
}
const MiddleShow = ({score}) => {
  return (
      <div className="show_box">
        <img src={img_middle}/>
        <h3>{score}分！哎哟，还不错哦！</h3>
        <p>超级投顾送您5期《选股牛人-吴伟伟》</p>
        <p>祝你2018炒股旺旺旺，赚钱手不停！</p>
      </div>
  )
}
const LowShow = ({score}) => {
  return (
      <div className="show_box">
        <img src={img_low}/>
        <h3>{score}分！加把劲，你可以更优秀！</h3>
        <p>超级投顾送您5期《选股牛人-吴伟伟》</p>
        <p>牛人助战，祝你2018人旺财发！</p>
      </div>
  )
}


class Result extends React.Component {


  constructor () {
    super()
    this.state = {
      phone: '',
      name: ''
    }
  }

  phoneChange (e) {
    this.setState({
      phone: e.target.value
    })
  }

  nameChange (e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit () {
    let {phone, name} = this.state
        , score = this.props.user.score
        , total_score = score.reduce((prev, current, index) => {
      if (current === answers[index]) {
        prev += 10
      }
      return prev
    }, 0)
    if (trim(name) === '') {
      return this.props.userActions.receivedError('请输入您的姓名')
    }
    if (!phoneCheck(phone)) {
      return this.props.userActions.receivedError('手机号码错误')
    }

    // alert(phone+","+name+","+total_score)
    console.log({phone, name, score: total_score})
    this.props.userActions.fetchPostsIfNeeded({phone, name, score: total_score})
  }

  getShowBox () {
    let score = this.props.user.score
        , total_score = score.reduce((prev, current, index) => {
      if (current === answers[index]) {
        prev += 10
      }
      return prev
    }, 0)
        , showbox

    if (total_score === 100) {
      showbox = <HighShow score={total_score}/>
    }
    else if (total_score >= 60) {
      showbox = <MiddleShow score={total_score}/>
    }
    else {
      showbox = <LowShow score={total_score}/>
    }

    return showbox
  }

  getInterBox () {
    let {received, name, phone} = this.props.user
        , interBox;
    if (!received) {
      interBox = (
          <div className="interBox">
            <div className="name-ipt">
              <input type="text" className="ipt name" id="name" placeholder="姓名"
                     value={this.state.name}
                     onChange={this.nameChange.bind(this)}
              />
            </div>
            <div className="blank-h-40"/>
            <div className="phone-ipt">
              <input type="text" className="ipt phone" id="phone" placeholder="手机"
                     value={this.state.phone}
                     onChange={this.phoneChange.bind(this)}
                     maxLength={11}
              />
            </div>
            <div className="blank-h-40"/>
            <div className="btn-box">
              <div className="submit-btn" id="submit" onClick={this.handleSubmit.bind(this)}>提交</div>
            </div>
          </div>
      )
    }
    else {
      interBox = (<div className="receivedBox">
        <p>尊敬的{name}</p>
        <p>您已经获得5期《选股牛人-吴伟伟》</p>
      </div>)
    }
    return interBox
  }


  render () {
    let showbox = this.getShowBox()
    let interBox = this.getInterBox()


    return (
        <div className="result">
          <div className="blank-h-40"/>
          <div className="logo"><img src={img_logo}/></div>
          {showbox}
          <div className="blank-h-60"/>
          {interBox}
          <div className="blank-h-20"/>
          <p className="text">后期会有客服人员与你联系，确认并发放奖品，</p>
          <p className="text">请确保电话畅通！</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(Result)
