








export const change1=(name)=>{

return {


                type:"add_wishes",
                payload:name

}







}


export const middleapi=()=>{

return(dispatch)=>{


    fetch("https://jsonplaceholder.typicode.com/users").then(res=>

    res.json()).then( res2=>




dispatch(


    {
            type:"Change_name",
            payload:res2[0].name

    }
)


)

}    



}

