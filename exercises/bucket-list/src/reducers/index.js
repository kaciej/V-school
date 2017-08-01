let defaultState = {
    item: []
}

const mainReducer = (state=defaultState, action) => {
    if(action.type === "ADD_ITEM"){
       return{
            ...state,
            item: action.data
       } 
    }else{
        return {
            ...state
        }
    }
}

export default mainReducer;