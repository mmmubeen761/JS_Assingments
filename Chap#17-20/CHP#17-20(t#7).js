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