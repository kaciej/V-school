export function makeChar(char) {
    return {
        type: "GEN_CHAR",
        char: char
    }
}

export function remove(index) {
    return {
        type: "TAKE_OUT",
        index: index
    }
}

export function update(post, index){
    return {
        type: "UPDATE",
        post,
        index
    }
}