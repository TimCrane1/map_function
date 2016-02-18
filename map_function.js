/*var oneByOne = [1,2,3];
function byThree(num) {
         return num * 3;
}*/


function map(array, callback) {
         var newArr = [];
         for(var i = 0; i < array.length; i++) {
             newArr.push (callback(array[i]));
         }
         return newArr;
}
/*map(oneByOne, byThree);*/