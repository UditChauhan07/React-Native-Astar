const Names=(state="", action)=>{
    switch(action.type){
        case 'Names':
            return action.payload
        default:
            return state
    }
}

export default Names;