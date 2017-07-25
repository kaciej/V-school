let defaultState = {
    color: "fff",
    name: "Color Name"
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === "NEW_COLOR"){      
        if(action.color === ""){
            return {
                ...state,
                color: "fff",
                name: "White"
            }
        }
        return {
            ...state,
              color: action.color,
              name: action.name
        }
    } else {
        return{
            ...state
        }
    }
   
}

export default mainReducer;
