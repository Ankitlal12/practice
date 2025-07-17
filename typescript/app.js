function sum(n1, n2, showResult, phrase) {
    //   if(typeof n1 !=='number' || typeof n2 !=='number'){
    //     throw new Error('incorrect input!');
    //   }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.08;
var printResult = true;
var resultPhrase = 'result is:';
sum(number1, number2, printResult, resultPhrase);
