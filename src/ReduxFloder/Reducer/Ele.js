const Ele=(state="", action)=>{
    switch(action.type){
        case 'Ele':
            return action.payload
        default:
            return state
    }
}

export default Ele;