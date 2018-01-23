right
var firstColorSeen = getColor
if (getColor == "red") {
  up
  up
  up
} else {
  down
  down
  down
}
if (getColor == "blue") {
  right
} else {
  left
}
setColor(firstColorSeen)
if (getColor == "blue") {
  down
} else {
  up
}
