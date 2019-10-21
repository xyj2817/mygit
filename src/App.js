import React from 'react';
import Router from './router/public'
import Yi from './router/index'

class App extends React.Component{
  render(){
    return(
      <div>
        <Router routes={Yi}/>
      </div>
    )
  }
}



export default App;
