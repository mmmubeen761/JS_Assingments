// Chapter 5(assignment number: 13)



var a = prompt("Enter fav. snack")
var b = prompt("Enter current age")
var c = prompt("Enter estimated max. age")
var d = prompt("Enter snack per day")
var e = ((c - b) * d)

document.write("The Lifetime Supply Calculator")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("Favourite snack:" + " " + a)
document.write("<br/>")
document.write("Current age:" + " " + b)
document.write("<br/>")
document.write("Estimated Maximum age:" + " " + c)
document.write("<br/>")
document.write("Amount of Snack per day:" + " " + d)
document.write("<br/>")
document.write("<br/>")
document.write("You will need" + " " + e + " " + a + " " + "to last you until the ripe old age of" + " " + c)