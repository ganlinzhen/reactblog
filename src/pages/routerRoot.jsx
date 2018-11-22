import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home'
import Detail from './detail'
import UnFound from './404'

class AppRouter extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="routerPage">
          <h1 className="myheader">这是头部导航栏</h1>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/>
              <Route path="/detail" component={Detail}/>
              <Route component={UnFound}/>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter