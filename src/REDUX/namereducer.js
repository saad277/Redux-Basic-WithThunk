
// REDUCERS require sample data so make dummy data 

const sample={



name:"redux"

}



const namereducer=(state =sample,action)=>{

                console.log(action);
                console.log(state.wishes)

                if(action.type=="Change_name"){

                                return {        

				name:action.payload               }

                }

            return state;



}


export default namereducer;