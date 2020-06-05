// Chapter 17 - 20(assignment number: 4)

var a = prompt("Enter a number to print its multiplication table")
var b = prompt("Enter lenght")

for (i = 0; i <= b; i++) {
    document.write(a + " " + "*" + " " + i + " " + "=" + (+(a * i)))
    document.write("<br/>")
}