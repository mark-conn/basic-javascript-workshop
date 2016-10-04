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

//returns the product of two number arguments.  If arguments are not numbers, will return NaN
var product = function(x,y) {
    return x * y;
    
}

product(3,3);
product("string",3);

/* takes two numbers and a string.  If string says 'add', returns
sum of numbers.  If string says 'subtract', returns difference.
If string says 'mult', returns product.  If string says 'div', returns
ratio.  Otherwise returns zero
*/

var switchOps = function(num1, num2, string) {
    switch(string) {
        case 'add':
            return num1 + num2;
            break;
        case 'subtract':
            if(num1 >= num2) {
                return num1 - num2;
            } else {
                return num2 - num1;
            }
            break;
        case 'mult':
            return num1 * num2;
            break;
        case 'div':
            return num1 / num2;
            break;
        default:
            return 0;
    }
    
};
switchOps(2,2,"add");
switchOps(2,2, "subtract");
switchOps(2,4, "subtract");
switchOps(3,3, "mult");
switchOps(12,4, "div");


//takes a string and a number, returns the string multiplied by number
var repeat = function(string, number) {
    return string.repeat(number);
    
}

repeat("dingus",9);
repeat("Im a doctor, too ", 9);
repeat("Check out Dr Steve Brule on Youtube :) ", 3);

//takes a string, returns string reversed using recursion

function reverse(string) {
    if(string === '') {
        return '';
    } 
    else {
        return reverse(string.substr(1)) + string.charAt(0);
    }
    
}
reverse("hello");
reverse("steve brule");

//takes a number and returns its factorial
function factorial(number) {
    
    if(number === (0 || 1)) {
        return 1;
        
    } else 
    
        {
    
        for(var i= number -1; i >= 1; i--) {
            number = number * i;
        
        }
    
    }
    
    return number;
}

factorial(5);
factorial(1);


//takes a phrase, returns its longest word
function biggest(string) {
    var longest = string.split(' ').sort(function(a, b) {
        
        return b.length - a.length;
        
    }) ;
        
    
    return longest[0];
}
biggest("huuuuuge, this is tiny");
biggest("drews characters are way too small");


//takes a phrase, returns every word with first letter capitalized
function capitalize(string) {
    
    var stringarr = string.split(' ');
    var newArray = [];
    for(var i = 0; i < stringarr.length; i++) {
        newArray.push(stringarr[i].charAt(0).toUpperCase() +  stringarr[i].slice(1).toLowerCase()) 
        
    }

    return newArray.join(' ');
};
capitalize("yO dUde Im pREtty lIT");



//returns the largest number in an array
function largest(array) {
    array.sort(function(a,b) {
        return b - a;
        
    })
    
    return array[0]
}

largest([1,3,4,55,4,7]);
largest([3,52,3,23]);

//takes an array, returns a filtered array with only truthy values
function truthyOnly(array) {
  var filteredArray = array.filter(Boolean);
  return filteredArray;
}
    
truthyOnly([NaN, 1, 2, false, 0, 3]);












