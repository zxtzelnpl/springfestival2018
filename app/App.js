import './app.less'
import React from 'react'
import {Route} from 'react-router-dom'

import Main from './pages/Main'
import Page1 from './pages/PageQuestion/page1.js'
import Page2 from './pages/PageQuestion/page2.js'
import Page3 from './pages/PageQuestion/page3.js'
import Page4 from './pages/PageQuestion/page4.js'
import Page5 from './pages/PageQuestion/page5.js'
import Result from './pages/Result'

const App = () => {
  return (
      <div className="container">
        <Route path="/" exact component={Main}/>
        <Route path="/page1" exact component={Page1}/>
        <Route path="/page2" exact component={Page2}/>
        <Route path="/page3" exact component={Page3}/>
        <Route path="/page4" exact component={Page4}/>
        <Route path="/page5" exact component={Page5}/>
        <Route path="/result" exact component={Result}/>
      </div>
  )
}

export default App
