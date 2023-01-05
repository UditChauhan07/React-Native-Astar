const ProfileImage=(state="", action)=>{
    switch(action.type){
        case 'ProfileImage':
            return action.payload
        default:
            return state
    }
}

export default ProfileImage;