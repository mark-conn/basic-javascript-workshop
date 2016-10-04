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

/*takes two numbers and adds them together. 
if not a number, function will concatenate */
var add = function(x,y) {
        return x + y;
}
add(8,9);
add("string", 9);










