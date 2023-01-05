const House=(state="", action)=>{
    switch(action.type){
        case 'House':
            return action.payload
        default:
            return state
    }
}

export default House;