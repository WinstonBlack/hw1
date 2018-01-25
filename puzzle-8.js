down
moveDownSeven
right
right
moveUpSeven
right
right
moveDownSeven
right
right
moveUpSeven
right
right
moveDownSeven
right

function moveDownSeven {
  var counter = 0
  while (counter < 7) {
    down
    counter = counter + 1
  }
}

function moveUpSeven {
  var counter = 0
  while (counter < 7) {
    up
    counter = counter + 1
  }
}
