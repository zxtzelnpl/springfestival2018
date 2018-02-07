'use strict'

import './Question.less'
import React from 'react'
import PropTypes from 'prop-types'

class Question extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){

  }

  handleClick(number){
    this.props.changeScore(number,this.props.question.key)
  }

  render(){
    let number = this.props.number,
        {title,choices} = this.props.question,
        choice_html = choices.map((choice,index)=>{
          return (<p key={index}
                     onClick={this.handleClick.bind(this,index)}
                     className={number === index?'active':''}
          ><span className="circle"/>{choice}</p>)
        })


    return (
        <div className="question">
          <h4>{title}</h4>
          <div className="blank-h-40" />
          <div className="choices">
            {choice_html}
          </div>
        </div>
    )
  }
}

Question.propTypes={
  question:PropTypes.shape({
    title:PropTypes.string,
    choices:PropTypes.arrayOf(PropTypes.string),
    key:PropTypes.number
  })
}

export default Question
