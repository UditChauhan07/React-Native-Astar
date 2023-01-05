const Element=(state="", action)=>{
    switch(action.type){
        case 'Element':
            return action.payload
        default:
            return state
    }
}

export default Element;