import React from 'react';
import { NavLink } from 'react-router-dom'
import Router from './router/index'

import './App.css'

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>欢迎来到我的个人blog</h1>
        <Router></Router>
        <div className='nav'>
          <NavLink to='/home' activeClassName='App-link'>首页</NavLink>
          <NavLink to='/food' activeClassName='App-link'>美食</NavLink>
          <NavLink to='/movie' activeClassName='App-link'>电影</NavLink>
        </div>
      </div>
    )
  }
}



export default App;
