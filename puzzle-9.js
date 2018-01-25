down
right
drawLine("right", 8)
down
drawLine("down", 3)
down
drawLine("left", 8)
up
drawLine("up", 4)

function drawLine(direction, steps) {
  counter = 0
  while (counter < steps) {
    setColor("blue")
    direction
    counter = counter + 1
  }
}
