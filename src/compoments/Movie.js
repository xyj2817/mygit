import React from 'react'
import { NavLink } from 'react-router-dom'
class Movie extends React.Component{
    render(){
        return(
            <div>
                <h1>电影频道</h1>
                <ul>
                    <li><NavLink to='/detail/1'>魔童降世</NavLink></li>
                    <li><NavLink to='/detail/2'>我和我的祖国</NavLink></li> 
                    <li><hr/></li>
                    <li><NavLink to={
                        {
                            pathname:'/detail',
                            query:{
                                qid:"攀登者"
                            }
                        }
                    }>攀登者</NavLink></li> 
                    <li><NavLink to={
                        {
                            pathname:'/detail',
                            state:{
                                sid:"流浪地球"
                            }
                        }
                    }>流浪地球</NavLink></li> 
                </ul>
                <button onClick={this.linkto.bind(this)}>战狼2</button>
            </div>
        )
    }
    linkto(){
        // this.props.history.push('/detail')
        // this.props.history.push({
        //     pathname:'/detail',
        //     state:{
        //         sid:"流浪地球"
        //     }
        // })
        this.props.history.replace('/detail')
    }
}
//编程式导航
export default Movie