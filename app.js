// Chapter# 1

// Chapter 1(assignment number: 1, 2)



alert("Error! Please enter a valid password")


// Chapter 1(assignment number: 3)


alert("Wellcome to JS land...\n Happy Coding!")


// Chapter 1(assignment number: 4)



alert("Welcome to JS Land")
alert("Happy Codding!\n prevent  this page from creating additional dialoges")


// Assignment 2

var a = username

var myName = "Mubeen Malik";
alert(myName)


// Chapter 1(assignment number: 5)


var message = "Hello World!"
alert(message)


// Chapter# 2


// Chapter 2(assignment number: 1, 2, 3)


var name = "Mubeen Malik"
var age = "18 years old "
var course = "Certified Mobile Application Development"
alert(name)
alert(age)
alert(course)


// Chapter 2(assignment number: 5)


alert(" PIZZA\n PIZZ\n PIZ\n PI\n P")



// Chapter 2(assignment number: 6)


var email = "malik@gmail.com "
alert("My email addres is" + " " + email)

// Chapter 2(assignment number: 7)


var book = "A smarter way to learn JavaScript"
alert("I am trying to learn from the Book " + " " + book)


// Chapter 2(assignment number: 8)


document.write("Yah! I can write HTML content through JS")





// Chapter 2(assignment number: 9)


var i = "-------@^¬^@-------"
alert(i)




// Chapter # 3



// Chapter 3(assignment number: 1)


var age = "18"
alert("I am" + " " + age + " " + " years old ")




// Chapter 3(assignment number: 2)


var a = 14
alert("You have visited this site" + " " + a + " " + "times")





// Chapter 3(assignment number: 3)


var birthYear = 2002
document.write("My birth year is" + " " + birthYear)
document.write("<br/>")
document.write("Data Type of my declared variable is number")


// Chapter 3(assignment number: 4)


var visiterName = "John Doe"
var productTitle = "5 T-shirt(s)"
var quantity = "2"

document.write(visiterName + " " + "orderd" + "  " + productTitle + " " + "on XYZ Clothing Store")




// VARIABLE NAMES: LEGAL & ILLEGAL(4)


// Chapter # 4


// Chapter 4(assignment number: 3)


var a = "numbers "
var b = "$"
var c = "_"
var d = "1st"
document.write("Rules for naming JS variable")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")
document.write("Variables names can only contain" + ", " + a + " ," + " " + b + ", " + "  and " + c + "." + "For example" + ":" + b + "my" + c + d + "Variables")
document.write("<br/>")
document.write("Variables must begin with a letter" + ", " + b + " or" + " " + c + "." + "For example" + ":" + b + "name" + "," + c + "name or name")
document.write("<br/>")
document.write("Variables names are case sensitive ")
document.write("<br/>")
document.write("Variables names should not be JS keywords ")



// Chapter# 5


// Chapter 5(assignment number: 1)


var val1 = prompt("enter first num")
var val2 = prompt("enter second number")
document.write("Sum of " + " " + val1 + " +" + val2 + " " + "=" + ((+val1) + (+val2)))



// Chapter 5(assignment number: 2)


var val1 = prompt("enter first num")
var val2 = prompt("enter second number")
document.write("Sum of " + " " + val1 + " -" + val2 + " " + "=" + ((+val1) - (+val2)))

var val1 = prompt("enter first num")
var val2 = prompt("enter second number")
document.write("Sum of " + " " + val1 + " *" + val2 + " " + "=" + ((+val1) * (+val2)))

var val1 = prompt("enter first num")
var val2 = prompt("enter second number")
document.write("Sum of " + " " + val1 + " /" + val2 + " " + "=" + ((+val1) / (+val2)))

var val1 = prompt("enter first num")
var val2 = prompt("enter second number")
document.write("Sum of " + " " + val1 + " % " + val2 + " " + "=" + ((+val1) % (+val2)))



// Chapter 5(assignment number: 3)


var a
document.write("The value of variable after declartion is :" + " " + a)
document.write("<br/>")
var a = 5
document.write("Initial value is :" + " " + a)
document.write("<br/>")
document.write("the value after increment is :" + " " + ++a)
document.write("<br/>")
var a = 6 + 7
document.write("Value after addition is:" + " " + a)
document.write("<br/>")
document.write("Value after decrement is :" + " " + --a)
document.write("<br/>")
document.write("Remainder is :" + " " + a % 3)



// Chapter 5(assignment number: 4)


var ticketPrice = "600 PKR "
document.write("Total cost to buy 5 ticket is  :" + " " + 600 * 5 + "PKR")



// Chapter 5(assignment number: 5)


var a = prompt("Enter a number for multiplication table")

document.write("table of " + " " + a + " " + "is")
document.write("<br/>")

for (var i = 0; i <= 10; i++) {
    document.write(a + " " + "*" + i + " " + "=" + " " + a * i)
    document.write("<br/>")
}


// Chapter 5(assignment number: 6)


var a = prompt("Enter temperature to convert in Celsius")
document.write("Temperature in Celsius is :" + " " + (a - 32) * 5 / 9 + " " + "`C")

var a = prompt("Enter temperature to convert in Farenheit")
document.write("Temperature in Farenheit is :" + " " + ((a * 9 / 5) + 32) + " " + "`F")




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


// Chapter 5(assignment number: 8)


var b = prompt("Enter Marks Obtained")
var a = prompt("Enter total Marks")

document.write("Total Marks:" + a)
document.write("<br/>")

document.write("Marks obtained:" + b)
document.write("<br/>")

document.write("Percentage:" + " " + (b / a * 100))


// Chapter 5(assignment number: 9)


var a = prompt("Enter US dollars to convert in Pak currency")
var b = prompt("Enter Saudi rayals to convert in Pak currency")

document.write("Currency in PKR")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("Total currency in PKR:" + " " + ((a * 104.80) + (b * 28)))


// Chapter 5(assignment number: 10)


var a = 10

document.write("Declared variable is:" + " " + a)
document.write("<br/>")
document.write("<br/>")

document.write("by adding:" + " " + (a + 5))
document.write("<br/>")

document.write("by multiplying:" + " " + (a * 5))
document.write("<br/>")
document.write("by dividing:" + " " + (a / 2))
document.write("<br/>")


// Chapter 5(assignment number: 11)


var a = prompt("Enter Current Year")
var b = prompt("Enter Birth Year")

document.write("AGE CALCULATOR")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("Current Year:" + " " + a)
document.write("<br/>")

document.write("Birth Year:" + " " + b)
document.write("<br/>")

document.write("Your Age is:" + " " + (a - b))



// Chapter 5(assignment number: 12)


var a = prompt("Enter Radius")

document.write("The Geometrizer")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("Radius of circle is:" + " " + a)
document.write("<br/>")

document.write("The circumference is:" + " " + (2 * 3.142 * a))
document.write("<br/>")

document.write("The area is:" + " " + (3.142 * (a * a)))


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



// Chapter  # 6 - 9



// Chapter 6 - 9(assignment number: 1)


var a = prompt("Enter a value")

document.write("The value of ++a" + " " + "is:" + (++a))
document.write("<br/>")
document.write("Now the value of a  is :" + " " + a)
document.write("<br/>")

document.write("The value of a++" + " " + "is:" + (a++))
document.write("<br/>")
document.write("Now the value of a  is :" + " " + a)
document.write("<br/>")

document.write("The value of --a" + " " + "is:" + (--a))
document.write("<br/>")
document.write("Now the value of a  is :" + " " + a)
document.write("<br/>")

document.write("The value of a--" + " " + "is:" + (a--))
document.write("<br/>")
document.write("Now the value of a  is :" + " " + a)


// Chapter 6 - 9(assignment number: 2)


var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;


document.write("a is :" + " " + (a))
document.write("<br/>")

document.write("b is :" + " " + (b))
document.write("<br/>")


document.write("result is:" + " " + (--a - --b + ++b + b--))



// Chapter 6 - 9(assignment number: 3)


var a = prompt("Enter your name")
alert("Welcome" + " " + a + " " + "to JS land")



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


// Chapter #  9-11



// Chapter 9 - 11(assignment number: 1)


var a = prompt("Enter yur city name")


if (a === "karachi") {
    alert("Welcome to city of lights");
} else {
    alert("You are from another city");
}



// Chapter 9 - 11(assignment number: 2)


var a = prompt("Enter yur Gender")


if (a === "male") {
    alert(" Good Morning Sir");
} else if (a === "female") {
    alert("Good Morning Ma’am");
}



// Chapter 9 - 11(assignment number: 3)


var a = prompt("Enter color of road signal")


if (a === "red") {
    alert(" Must Stop");
} else if (a === "yellow") {
    alert("Ready to move");
} else if (a === "green") {
    alert("Move now");
}


// Chapter 9 - 11(assignment number: 4)


var a = prompt("Enter remaining fuel in car (in litres) ")


if (a < 0.25) {
    alert("Please refill the fuel in your car");
}



// Chapter 9 - 11(assignment number: 5)


var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// yes it desplay

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// no it not desplay

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// comdition 4 is true


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// yes it desplay


if (true) {
    alert("True");
}
if (false) {
    alert("False");
}


true

if ("car" < "cat") {
    alert("car is smaller than cat");
}


// it runs




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



// Chapter 9 - 11(assignment number: 7)


var a = prompt("Guess a secret number (ranging from 1 to 10)")

if (a == 2) {
    alert("“Bingo! Correct answer ")
} else if (a == 1) {
    alert("Close enough to the correct answer")
} else if (a == 3) {
    alert("Close enough to the correct answer")
} else {
    alert("Sorry! Try again")
}




// Chapter 9 - 11(assignment number: 8)


var a = prompt("Enter no. to check whether it is divisble by 3 or not")

if ((a % 3) == 0) {
    alert("Number is divisble by 3")
} else {
    alert("number is not divisble by 3")
}



// Chapter 9 - 11(assignment number: 9)


var a = prompt("Enter no. to check whether the number is odd or even")

if ((a % 2) == 0) {
    alert("Number is even")
} else {
    alert("number is odd")
}



// Chapter 9 - 11(assignment number: 10)


var a = prompt("Enter a temperature")

if (a > 40) {
    alert("It is too hot outside.")
} else if (a > 30) {
    alert("The Weather today is Normal.")
} else if (a > 20) {
    alert("Today’s Weather is cool..")
} else if (a > 10) {
    alert("OMG! Today’s weather is so Cool.")
}



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




// Chapter  # 12 - 13

// Chapter 12 - 13(assignment number: 2)



var a = prompt("Enter a number")
var b = prompt("Enter a number")

if (a === b) {
    alert("The numbers are equal")
} else if (a > b) {
    alert(a + " " + " number is greater")
} else if (a < b) {
    alert(b + " " + " number is greater")
}


// Chapter 12 - 13(assignment number: 3)


var a = prompt("Enter a number")

if (a < 0) {
    alert("The number is negative")
} else if (a > 0) {
    alert(a + " " + " number is positive")
} else if (a == 0) {
    alert("number is zero ")
}


// Chapter 12 - 13(assignment number: 4)


var a = prompt("ENTER A CHARACTER (vowel)")

if (a === "a") {
    alert("True")
} else if (a === "e") {
    alert("True")
} else if (a === "i") {
    alert("True")
} else if (a === "o") {
    alert("True")
} else if (a === "u") {
    alert("True")
} else {
    alert("False")
}


// Chapter 12 - 13(assignment number: 5)


var b = prompt("Enter your passwrod")
var a = "321"


if (b === a) {
    alert("Correct Password")
} else if (b !== a) {
    alert("Wrong password")
}


// Chapter 12 - 13(assignment number: 6)


var hour = 13
if (hour < 18) {
    alert("Good day")
} else {
    alert("Good evening")
}




// Chapter 12 - 13(assignment number: 7)


var time = prompt("Enter time in 24 hours clock format ")

if (time >= 0000 && time < 1200) {
    alert("Good Morning")
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon")
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening")
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night")
}





// Chapter # 14-16


// Chapter 14 - 16(assignment number: 3)

var stdntName = ["malik", "khan", "niakl"]

// Chapter 14 - 16(assignment number: 4)

var numbers = [1, 2, 3, 4]


// Chapter 14 - 16(assignment number: 5)


var boolean = [true, false, and, or, ]

// Chapter 14 - 16(assignment number: 6)

var mixed = [1, "ali,", true]


// Chapter 14 - 16(assignment number: 7)


var qual = ["SSC ", "HSC ", "BCS ", "BS", "BCOM ", "MS", "M.Phil. ", "PhD "]
document.write(qual)


// Chapter 14 - 16(assignment number: 8)


var stdName = ["ali", "hamxa", "malik"]
var score = [320, 230, 480]

document.write("Score of" + " " + stdName[0] + " " + "is" + " " + score[0] + " " + "Percentage:" + " " + (score[0] / 500 * 100) + " " + "%")
document.write("<br/>")
document.write("Score of" + " " + stdName[1] + " " + "is" + " " + score[1] + " " + "Percentage:" + " " + (score[1] / 500 * 100) + " " + "%")
document.write("<br/>")
document.write("Score of" + " " + stdName[2] + " " + "is" + " " + score[2] + " " + "Percentage:" + " " + (score[2] / 500 * 100) + " " + "%")
document.write("<br/>")



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


// Chapter 14 - 16(assignment number: 10)


document.write("Numbr are:")

for (i = 0; i <= 4; i++) {
    b = prompt("Enter score")
    document.write(b + " ," + "")

}



// Chapter 14 - 16(assignment number: 11)


var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

document.write("Cites List:\n" + " " + cities)
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

a = cities.slice(2, 4)
document.write("Selected Cities:\n" + a)



// Chapter 14 - 16(assignment number: 12)


var arr = ["This", "is", "my", "cat"]
document.write("Array:" + " " + arr)
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("String:" + " " + arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3])



// Chapter 14 - 16(assignment number: 13)


var arr = ["keyboard", "mouse", "printer", "monitor"]

document.write("Devices:" + " " + arr)
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")



// Chapter 14 - 16(assignment number: 14)


for (i = 0; i < 4; i++) {
    document.write("out:" + arr[i])
    document.write("<br/>")

}



// Chapter # 17 - 20


// Chapter 17 - 20(assignment number: 2)


var arr = [
    [0, 1, 2, 3]
    [1, 0, 1, 2],
    [2, 1, 0.1]
]
document.write(arr[0])
document.write("<br/>")
document.write(arr[1])
document.write("<br/>")
document.write(arr[2])
document.write("<br/>")


// Chapter 17 - 20(assignment number: 3)


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i = 0; i <= 9; i++) {
    document.write(arr[i])
    document.write("<br/>")
}


// Chapter 17 - 20(assignment number: 4)

var a = prompt("Enter a number to print its multiplication table")
var b = prompt("Enter lenght")

for (i = 0; i <= b; i++) {
    document.write(a + " " + "*" + " " + i + " " + "=" + (+(a * i)))
    document.write("<br/>")
}



// Chapter 17 - 20(assignment number: 5)


var fruits = ["apple", "banana", "mango", "orange ", "strawberry "]

for (i = 0; i <= 4; i++) {
    document.write(fruits[i])
    document.write("<br/>")
}
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

for (i = 0; i <= 4; i++) {
    document.write("Element at index" + " " + i + " " + "is" + " " + fruits[i])
    document.write("<br/>")

}


// Chapter 17 - 20(assignment number: 6)


document.write("Counting:" + " ")
for (i = 1; i <= 15; i++) {
    document.write(i + ",")
}
document.write("<br/>")
document.write("<br/>")

document.write("reverse:" + " ")
for (i = 10; i >= 1; i--) {
    document.write(i + ",")
}
document.write("<br/>")
document.write("<br/>")

document.write("Even:" + " ")
for (i = 0; i <= 20; i += 2) {
    document.write(i + ",")

}
document.write("<br/>")
document.write("<br/>")

document.write("odd:" + " ")
for (i = 1; i <= 20; i += 2) {
    document.write(i + ",")

}
document.write("<br/>")
document.write("<br/>")

document.write("Even:" + " ")
for (i = 0; i <= 20; i += 2) {
    document.write(i + "k" + ",")

}



// Chapter 17 - 20(assignment number: 7)


var a = prompt("Enter cookie")
var b = ["cake", "apple pie", "cookie", "chips", "patties "]
for (i = 0; i <= 4; i++) {
    if (a === b[i]) {
        alert(b[i] + " " + "is available at" + " " + "index" + " " + i + " " + "in our bakery")
    } else {
        alert("WE are SORRY!" + " " + a + " " + "is not availbe in our bakery")
    }
    break
}



// Chapter 17 - 20(assignment number: 8)

var a = [24, 53, 78, 91, 12]

document.write("Array items:" + " " + a)
document.write("<br/>")
document.write("<br/>")

for (i = 0; i <= 4; i++) {
    if (a[i] >= a[3]) {
        document.write("The largest number is:" + " " + a[i])
    }
}



// Chapter 17 - 20(assignment number: 9)

var a = [24, 53, 78, 91, 12]

document.write("Array items:" + " " + a)
document.write("<br/>")
document.write("<br/>")

for (i = 0; i <= 4; i++) {
    if (a[i] <= a[4]) {
        document.write("The largest number is:" + " " + a[i])
    }
}




// Chapter 17 - 20(assignment number: 10)


for (i = 1; i <= 100; i++) {
    if ((i % 5) === 0) {
        document.write(i + ",")
    }
}