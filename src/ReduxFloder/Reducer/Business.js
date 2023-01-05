const Business=(state="", action)=>{
    switch(action.type){
        case 'Business':
            return action.payload
        default:
            return state
    }
}

export default Business;