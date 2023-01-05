const Edit=(state="", action)=>{
    switch(action.type){
        case 'Edit':
            return action.payload
        default:
            return state
    }
}

export default Edit;