var numArr = [3,5,74,2,12,6,];

var bubble = function(arr){ 
    for(var i = 0; i < arr.length; i++){
        for(var x = 0; x < arr.length -1; x++){
            if(arr[i] < arr[x]){
                var temp = arr[i];
                arr[i] = arr[x];
                arr[x] = temp;
            }
        }
    }
    console.log(arr);
}

bubble(numArr);