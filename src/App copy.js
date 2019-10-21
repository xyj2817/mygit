import React from 'react';
//  按需引入  使用谁引入谁
import {Component} from 'react';

import Stone from './assest/img/shitou.png'
import Knife from './assest/img/jiandao.png'
import Bu from './assest/img/bu.png'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      // arr:[Stone,Knife,Bu],
      arr:[
        {
          src:Stone,
          name:'Stone'
          
        },
        {
          src:Knife,
          name:'Knife'
        },
        {
          src:Bu,
          name:'Bu'
        }
      ],
      Aname:'Stone',
      src:Stone,
      zhao:''
    }
  }
  render(){
    return(
      <div>
        <h1>猜拳</h1>
        <img src={this.state.src}/>
        <button onClick={this.chang.bind(this)}>出手吧</button>
        <h2>我出招：</h2>
        <input type='radio' defaultValue='Knife' name='zhao' onChange={this.active.bind(this)} />剪刀
        <input type='radio' defaultValue='Stone' name='zhao' onChange={this.active.bind(this)} />石头
        <input type='radio' defaultValue='Bu' name='zhao' onChange={this.active.bind(this)} />布

        <hr/>
        我{this.state.zhao}  --- 你{this.state.Aname}
      </div>
    )
  }
  active(e){
    this.setState({
      zhao:e.target.value
    })
   
  }
  chang(){
    var time = setInterval(()=>{
      var ran = this.state.arr[Math.floor(Math.random()*3)]
      this.setState({
        src:ran.src,
        Aname:ran.name
      })
    },10)
    setTimeout(()=>{
      clearInterval(time)

// A  1 2 3
// B    2  

      var A = this.state.Aname;   
      var B = this.state.zhao;
      if(A==B){
        console.log('平分秋色')
      }else{
        if((A=='Stone'&&B=='Bu') || (A=='Bu'&&B=='Knife') || (A=='Knife'&&B=='Stone')){
          console.log('我厉害承让了')
        }
        if((A=='Stone'&&B=="Knife") || (A=='Bu'&&B=="Stone") || (A=='Knife'&&B=="Bu")){
          console.log('你赢了')
        }
      }


      // console.log(this.state.zhao,)
    },1000)
  }
}



export default App;
