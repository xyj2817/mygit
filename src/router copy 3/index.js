import React from 'react'
//  引入路由核心文件
import { Route, Switch, Redirect } from 'react-router-dom'

//引入组件
import Index from '../compoments/Index'
import Detail from '../compoments/Detail'

const routes = [
    {
        path: '/index',
        component: Index
    },
    {
        path: '/detail',
        component: Detail
    },
    {
        path: '*',
        redirect: '/index'
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