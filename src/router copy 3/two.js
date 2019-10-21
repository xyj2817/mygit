import React from 'react'
//  引入路由核心文件
import { Route, Switch, Redirect } from 'react-router-dom'

//引入组件
import Home from '../compoments/Home'
import Food from '../compoments/Food'
import Movie from '../compoments/Movie'

const routes = [
    {
        path: '/index/home',
        component: Home
    },
    {
        path: '/index/food',
        component: Food
    },
    {
        path: '/index/movie',
        component: Movie
    },
    {
        path: '*',
        redirect: '/index/home'
    },
]

//一般建议使用  函数的方法创建  路由
const Router = () => {
    return (
        <div>
            <Switch>
                {
                    routes.map((val, ind) => {
                        if (val.path == '*') {
                            return <Redirect key={ind} to={val.redirect} />
                        }
                        else {
                            return <Route key={ind} path={val.path} component={val.component} />
                        }
                    })
                }
            </Switch>
        </div>
    )
}


export default Router