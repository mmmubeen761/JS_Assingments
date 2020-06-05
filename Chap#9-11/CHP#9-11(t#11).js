// Chapter 9 - 11(assignment number: 11)



var a = prompt("Enter 1st num ")
var b = prompt("Enter Operation ")
var c = prompt("Enter 2nd num ")

if (b == "+") {
    alert(a + " " + "+" + " " + c + " " + "=" + " " + (+(a + c)))
} else if (b == "-") {
    alert(a + " " + "-" + " " + c + " " + "=" + " " + (+(a - c)))
} else if (b == "*") {
    alert(a + " " + "*" + " " + c + " " + "=" + " " + (+(a * c)))
} else if (b == "/") {
    alert(a + " " + "/" + " " + c + " " + "=" + " " + (+(a / c)))
}