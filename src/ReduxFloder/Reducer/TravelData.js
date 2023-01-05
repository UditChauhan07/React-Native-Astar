const TravelData=(state="", action)=>{
    switch(action.type){
        case 'TravelData':
            return action.payload
        default:
            return state
    }
}

export default TravelData;