/*        
create 4 functions for js file to calc:
    1. Is Truthy - falsy values print falsy statements, else true
        use if-else, && ||, boolean
    2. Number Line - sum 2 numbers and print result
        use if-else, && ||, < > = !
        < -1000, neg #, =0, >0, >100
    3. Greater than Equal to 5 - 
        given 2 numbers & print true when both number >=5, else false
    4. Pair & Compare - given 2 pair of values, compare with ===, strict comparison
        if @ least 1 true -> true, else false

Create variables to store inputs & results
print result 
use console.log to test numbers */

function isTruthy() {
    /* declare variables and assign with input from html file
    /   Is Truthy - falsy values print falsy statements, else true
    /   use if-else, && ||, boolean */
    let value = document.getElementById("input1").value;
    if (value === "") {
        document.getElementById("result1").innerHTML = "The empty string is falsy (the only falsy string)!";
    }
    else if (value == "null") {
        document.getElementById("result1").innerHTML = "The null value is falsy";
    }
    else if (value == "undefined") {
        document.getElementById("result1").innerHTML = value + " is falsy";
    }
    else if (value == "0") {
        document.getElementById("result1").innerHTML = "The number " + value + " is falsy (the only falsy number)!";
    }
    else if (value == "false") {
        document.getElementById("result1").innerHTML = "The boolean value " + value + " is falsy!";
    }
    else {
        document.getElementById("result1").innerHTML = value + " is truthy!";
    }

}
/* declare variables and assign with input from html file
    /   Number Line - sum 2 numbers and print result
    /   use if-else, && ||, < > = !
    /   < -1000, neg #, =0, >0, >100 */
function numberLine() {
    let num1 = document.getElementById("input2").value;
    let num2 = document.getElementById("input3").value; 
    //convert string values to number: Number(), parseInt(), parseFloat()
    let sum = Number(num1) + Number(num2);

    if (sum == 0 ) {
        document.getElementById("result2").innerHTML = sum + " is equal to 0";
    }
    else if (sum < 0) {
        document.getElementById("result2").innerHTML = sum + " is a negative number";
        if (sum < -1000) {
            document.getElementById("result2").innerHTML = sum + " is a negative numbers and less than -1000";
        }
    }
    else if (sum > 0) {
        document.getElementById("result2").innerHTML = sum + " is larger than 0";
        if (sum > 100) {
            document.getElementById("result2").innerHTML = sum + " is larger than 100";
        }
    }
    else  {
        document.getElementById("result2").innerHTML = sum + " Please enter valid numbers";
    }
}
    

/* Greater than Equal to 5 - 
        given 2 numbers & print true when both number >=5, else false
        convert string values to number: Number(), parseInt(), parseFloat() */
function compareToFive() {
    let num1 = document.getElementById("input4").value;
    let num2 = document.getElementById("input5").value;
 //   num1 = Number(num1);
 //   num2 = Number(num2);
    if (num1 >= 5 && num2 >= 5) {
        document.getElementById("result3").innerHTML = "true";
    }
    else {
        document.getElementById("result3").innerHTML = "false";
    }
}

/* Pair & Compare - given 2 pair of values, compare with ===, strict comparison
        if @ least 1 true -> true, else false */
function comparePair() {
    let value1a = document.getElementById("input6").value;
    let value1b = document.getElementById("input7").value;
    let value2a = document.getElementById("input8").value;
    let value2b = document.getElementById("input9").value;
    if (value1a === value1b || value2a === value2b) {
        document.getElementById("result4").innerHTML = "true";
    }
    else {
        document.getElementById("result4").innerHTML = "false";
    }
}