// Chapter 6 - 9(assignment number: 5)


var a = prompt("Enter a suject name")
var b = prompt("Enter a suject obt. num")
var c = prompt("Enter a suject name")
var d = prompt("Enter a suject obt. num")
var e = prompt("Enter a suject name")
var f = prompt("Enter a suject obt. num")


document.write("Subject " + "     " + "Total marks" + " " + "Obt. marks" + " " + "Per.")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")


document.write(a + " " + "100" + " " + b + "Obt. marks" + " " + b + "%")
document.write("<br/>")

document.write(c + " " + "100" + " " + d + "Obt. marks" + " " + d + "%")
document.write("<br/>")

document.write(e + " " + "100" + " " + f + "Obt. marks" + " " + f + "%")
document.write("<br/>")

document.write(e + " " + "300" + " " + " " + (a + c + e) + " " + " " + ((a + c + e) / 300 * 100))
document.write("<br/>")