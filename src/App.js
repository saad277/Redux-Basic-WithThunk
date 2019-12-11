import React from 'react';
import {Component} from 'react'
import './App.css';

import {change1,middleapi} from './REDUX/actions'

import {connect} from 'react-redux';

function App(props) {
  
  console.log(props);
console.log(props.myname);
  

  return (
    <div className="App">
    
      <h1>    Parent   </h1>
      <h2>    {props.myname}      </h2>

      <button onClick={()=>props.changeName("party")     } >      Click to change state       </button>
    </div>
  );

}

const mapStateToProps=(state)=>{


return {    myname:state.name.name      }


}

const DispatchStateToProps=(dispatch)=>{

  return {


      changeName:(name)=>{

          dispatch(

              change1(name)     
          )

      }

  }



}



export default connect(mapStateToProps,DispatchStateToProps)(App);
