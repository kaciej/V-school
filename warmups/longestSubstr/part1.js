let genSubStr = (str) => {
    var result = [];
    for(let i = 0; i < str.length; i++){
        for(let x = i + 1; x < str.length +1; x++){
            result.push(str.slice(i, x));
        }
    }
    return result;
}

console.log(genSubStr("hello"));


var arr = [ 'h',
            'he',
  'hel',
  'hell',
  'hello',
  'e',
  'el',
  'ell',
  'ello',
  'l',
  'll',
  'llo',
  'l',
  'lo',
  'o' ]
