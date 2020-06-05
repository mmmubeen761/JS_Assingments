// Chapter 14 - 16(assignment number: 9)


var colorName = ["red", "green", "blue", "black", "orange"]
document.write("<br/>")
document.write("<br/>")

document.write(colorName)

var a = prompt("What color you want to add to the begining")
alert(a)
colorName.unshift(a)
document.write(colorName)
document.write("<br/>")
document.write("<br/>")

var b = prompt("What color you want to add to the end")
alert(a)
colorName.push(b)
document.write(colorName)
document.write("<br/>")
document.write("<br/>")

colorName.unshift("Grey", "brown")
document.write(colorName)
document.write("<br/>")
document.write("<br/>")

colorName.shift(colorName[0])
document.write(colorName)
document.write("<br/>")
document.write("<br/>")

colorName.pop(colorName)
document.write(colorName)
document.write("<br/>")
document.write("<br/>")

var c = prompt("which color you want to add ?")
var d = prompt("Which index value do you want")
colorName.splice(d, 0, c)
document.write(colorName)

var c = prompt("which index he/she wants to delete color(s)")
var d = prompt(" how many colors he/she wants to delete.")
colorName.splice(c, d)
document.write(colorName)