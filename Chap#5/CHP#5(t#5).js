// Chapter 5(assignment number: 5)


var a = prompt("Enter a number for multiplication table")

document.write("table of " + " " + a + " " + "is")
document.write("<br/>")

for (var i = 0; i <= 10; i++) {
    document.write(a + " " + "*" + i + " " + "=" + " " + a * i)
    document.write("<br/>")
}