import 'es6-promise'
import 'whatwg-fetch'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter as Router} from 'react-router-dom'
import configureStore from './store/configureStore'
import {initialState} from './reducers/user'


import App from './App'

let store = configureStore({user: initialState})

render(<Provider store={store}>
      <Router>
        <App/>
      </Router>

    </Provider>
    , document.getElementById('root'))
