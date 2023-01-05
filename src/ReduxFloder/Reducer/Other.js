const Other=(state="", action)=>{
    switch(action.type){
        case 'Other':
            return action.payload
        default:
            return state
    }
}

export default Other;