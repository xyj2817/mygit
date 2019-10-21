import React from 'react'
//  引入路由核心文件
import { Route, Switch, Redirect } from 'react-router-dom'




//一般建议使用  函数的方法创建  路由
const Router = (props) => {
    return (
        <div>
            <Switch>
                {
                    props.routes.map((val, ind) => {
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