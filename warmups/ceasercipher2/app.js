


let ceasarCippher = (str, num) => {
    result = "";
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        let index = alpha.indexOf(str[i]);
        if(index === -1) {
            result =+ str[i];
        } else {
            index += num;
            index = index % 26;
        }
        if(index < 0){
            index += 26;
        }
        result += alpha[index];
    } 
    return result;
}

console.log(ceasarCippher("work", 1));

