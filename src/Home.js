import React from 'react'; 
import {Component} from 'react'

class Home extends Component {
constructor(){

super()

this.state={

            names:" Iam state of Child Component"

}


}

render(){

return(

    <div>

<h1>      Home Component          </h1>


<button onClick={()=>this.props.sendstate(this.state.names)}>    Click to Send state from Child           </button>

</div>

);




}









}


export default Home;