
const sample = {

    wishes: ["eat", "sleep", "reapeat"]


}




const wishreducer = (state = sample.wishes, action) => {

    console.log(action);
    console.log(state.wishes)

    if (action.type == "add_wishes") {

        return [...state,action.payload]

    }

    return state;



}


export default wishreducer;