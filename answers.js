// one line comment

//takes a string argument and returns its first characte
var firstChar = function(string) {
    return string.charAt(0);
    
}

//takes a string argument and returns last character
var lastChar = function(string) {
    return string.charAt(string.length -1);
    
}
lastChar("Mark");
lastChar("Kitching");

/*takes a string and number, returns character at the position of the
number argument, indexing from 0 */

var charPosn = function(string, number) {
    return string.charAt(number);

}
charPosn("Dingus", 1);
charPosn("Dingus", 5);
