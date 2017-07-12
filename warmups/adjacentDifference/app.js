//https://coursework.vschool.io/adjacent-difference/

let adjacentDiff = (arr) => {
    let total = 0;
    let lngth = 0;
    let longest = 0;
    let index = 0;
    let result = [];
    if(arr.length < 3){
        throw "input is too short";
    }else if(arr.length == 3){
        return arr;
    }else{
        total += arr[0].length;
        total += arr[arr.length -1].length;
        for(let i = 1; i < arr.length - 1; i++){
            total +=arr[i].length;
            if(total == 0){
                return ["", "", ""];
            }else {
                lngth = arr [i -1].length + arr[i].length + arr[i + 1].length;
                if (lngth > longest){
                    longest = lngth;
                    index = i;
                }
            }
        }
        
    }
    result.push(arr[index -1], arr[index], arr[index + 1])
    return result;
}
  

module.exports = adjacentDiff;

console.log(adjacentDiff(["a", "ab", "abc", "abcd", "abcdefg", "x", "jk"]))