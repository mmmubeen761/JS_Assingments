// Chapter 6 - 9(assignment number: 4)


var a = prompt("Enter number for multiplication table")
if (a = a) {
    for (i = 0; i <= 10; i++) {
        document.write(a + " " + "*" + " " + i + " " + "=" + (+(a * i)))
        document.write("<br/>")

    }
} else {
    for (i = 0; i <= 10; i++) {
        document.write(5 + " " + "*" + " " + i + " " + "=" + (+(5 * i)))
        document.write("<br/>")

    }
}