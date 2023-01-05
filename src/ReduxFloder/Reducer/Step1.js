const Step1=(state="", action)=>{
    switch(action.type){
        case 'Step1':
            return action.payload
        default:
            return state
    }
}

export default Step1;