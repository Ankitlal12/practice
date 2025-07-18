// function combine(input1:any,input2:any){
// const result=input1+input2;
// return result;
//   }
// const combinedAges=combine(26,30);
// console.log(combinedAges);
// const combinedNames=combine('MAX','ANNA');
// console.log(combinedNames)
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'Hello  Kitty') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAges = combine(26, 30, 'Hello kitty');
console.log(combinedAges);
var combinedStringAges = combine('26', '30', 'Hell kitty');
console.log(combinedStringAges);
var combinedNames = combine('MAX', 'ANNA', 'hello kittu');
console.log(combinedNames);
