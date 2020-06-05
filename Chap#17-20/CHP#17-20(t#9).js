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