let defaultState = {
    joke: ""
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === "GET_JOKE"){
        return {
            ...state,
            joke: action.joke
        }
    }else {
        return {
            ...state
        }
    }
}

export default mainReducer;