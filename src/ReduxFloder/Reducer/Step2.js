const Step2=(state="", action)=>{
    switch(action.type){
        case 'Step2':
            return action.payload
        default:
            return state
    }
}

export default Step2;