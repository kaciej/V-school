//https://coursework.vschool.io/frame-it/

let frameIt = (str) => {
    let border = [...Array(str.length + 2)].map((e) => {
        return "*"
    })
let pic = ["*", ...str.split(""),"*"];
    return[
        border,pic,border
    ]
 
}

module.exports = frameIt;

console.log(frameIt("kacie"))