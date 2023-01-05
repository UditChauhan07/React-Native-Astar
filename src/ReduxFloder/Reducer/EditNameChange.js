const EditNameChange=(state="", action)=>{
    switch(action.type){
        case 'EditNameChange':
            return action.payload
        default:
            return state
    }
}

export default EditNameChange;