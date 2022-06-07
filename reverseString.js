function reverse(word){
    var reverseWord= "";
    for(i=0; i<word.length; i++) {
        reverseWord= word[i] + reverseWord;
    }
    return reverseWord;
}
var word= "REDRUM";
console.log(reverse(word));