import React from 'react';
import { NavLink } from 'react-router-dom'
import Router from '../router/public'
import Two from '../router/one'

import '../App.css'

class Index extends React.Component{
  render(){
    return(
      <div>
        <h1>欢迎来到我的个人blog</h1>
        <Router routes={Two}></Router> 
        <div className='nav'>
          <NavLink to='/index/home' activeClassName='App-link'>首页</NavLink>
          <NavLink to='/index/food' activeClassName='App-link'>美食</NavLink>
          <NavLink to='/index/movie' activeClassName='App-link'>电影</NavLink>
        </div>
      </div>
    )
  }
}



export default Index;
