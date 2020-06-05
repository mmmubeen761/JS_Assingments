// Chapter 5(assignment number: 7)


var P1 = prompt("Enter price of item 1")
var C1 = prompt("Enter quantity of item 1")
var P2 = prompt("Enter price of item 2")
var C2 = prompt("Enter quantity of item 2")

document.write("Shopping Cart")
document.write("Price of item 1  is :" + "" + P1)
document.write("<br/>")

document.write("Quantity of item 1:" + " " + C1)
document.write("<br/>")

document.write("Price of item 2  is :" + "" + P2)
document.write("<br/>")

document.write("Quantity of item 1:" + " " + C2)
document.write("<br/>")

document.write("Shipping charges is: 100")
document.write("<br/>")
document.write("<br/>")
document.write("Total cost of your order is " + " " + (((+P1) * C1) + ((+P2) * C2) + 100))