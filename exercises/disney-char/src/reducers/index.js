let defaultSate = {
    chars: []
}

const mainReducer = (state = defaultSate, action) => {
    if(action.type === "GEN_CHAR"){
        return{
            ...state,
            chars: [
                ...state.chars,
                {
                    title: action.char.title,
                    url: action.char.url,
                    desc: action.char.desc
                }
            ]
            
        }
    }else if(action.type === "TAKE_OUT"){
        let newList = [...state.chars]
        newList.splice(action.index, 1)
        return{
            ...state,
            chars: newList
        }
    }else if(action.type === "UPDATE"){
        let copy = [...state.chars];
        copy[action.index] = action.chars;
        return {
            ...state,
            chars: copy
        }
    }else{
        return{
            ...state
        }
    }
}

export default mainReducer;