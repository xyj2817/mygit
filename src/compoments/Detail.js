import React from 'react'

class Detail extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <button onClick={this.gos.bind(this)}>返回</button>
                {/* <h1>我是详情页{this.props.match.params.id}</h1> */}
                {/* <h1>我是详情页{this.props.location.query.qid}</h1> */}
                {/* <h1>我是详情页{this.props.location.state.sid}</h1> */}
                <h1>我是详情页</h1>
            </div>
        )
    }
    gos(){
        this.props.history.go(-1)
    }
}

export default Detail