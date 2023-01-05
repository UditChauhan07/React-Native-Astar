const Spouse=(state="", action)=>{
    switch(action.type){
        case 'Spouse':
            return action.payload
        default:
            return state
    }
}

export default Spouse;