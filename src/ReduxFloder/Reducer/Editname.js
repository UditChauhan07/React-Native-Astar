const Editname=(state="", action)=>{
    switch(action.type){
        case 'Editname':
            return action.payload
        default:
            return state
    }
}

export default Editname;