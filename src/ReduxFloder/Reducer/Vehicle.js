const Vehicle=(state="", action)=>{
    switch(action.type){
        case 'Vehicle':
            return action.payload
        default:
            return state
    }
}

export default Vehicle;