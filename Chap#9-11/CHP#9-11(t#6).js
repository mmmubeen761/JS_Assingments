// Chapter 9 - 11(assignment number: 6)


var a = prompt("Enter marks obtain in three subject")
var b = prompt("Enter total marks")
var c = a / b * 100


document.write("MARKS SHEET")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("Total marks:" + " " + b)
document.write("<br/>")

document.write("Obtain marks:" + " " + a)
document.write("<br/>")

document.write("Percentage" + " " + c + "%")
document.write("<br/>")


if (c >= 80) {
    document.write("Grade: A-one")
    document.write("<br/>")
    document.write("Remarks: Excellent")
    document.write("<br/>")

} else if (c >= 70) {
    document.write("Grade: A")
    document.write("<br/>")
    document.write("Remarks: Good")
    document.write("<br/>")

} else if (c >= 60) {
    document.write("Grade: B")
    document.write("<br/>")
    document.write("Remarks: You need to improve")
    document.write("<br/>")

} else if (c < 60) {
    document.write("Grade: fail")
    document.write("<br/>")
    document.write("Remarks: Sorry")
    document.write("<br/>")

}