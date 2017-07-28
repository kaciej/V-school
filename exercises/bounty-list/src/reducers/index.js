let defaultState = {
    hits: []
};

const mainReducer = (state = defaultState, action) => {
    if(action.type === "ADD_HIT"){
        return {
            ...state,
            hits: action.data
        }
    }else{
        return {
            ...state
        }
    }
}

export default mainReducer;