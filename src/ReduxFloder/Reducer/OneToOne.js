const OneToOne=(state="", action)=>{
    switch(action.type){
        case 'OneToOne':
            return action.payload
        default:
            return state
    }
}

export default OneToOne;