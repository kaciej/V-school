let defaultState = {
    randomName: ""
}



const mainReducer = (state = defaultState, action) => {
    if(action.type === "PICK_NAME"){
        let namesArr = [action.names.name1, action.names.name2, action.names.name3];
        let randomNum = Math.floor(Math.random() * namesArr.length);
      
        return{
            ...state,
           randomName: namesArr[randomNum]
        }
    }else{
        return {
            ...state
        }
    }
}

export default mainReducer;