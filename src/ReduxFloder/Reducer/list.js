const list=(state="", action)=>{
    switch(action.type){
        case 'list':
            return action.payload
        default:
            return state
    }
}

export default list;