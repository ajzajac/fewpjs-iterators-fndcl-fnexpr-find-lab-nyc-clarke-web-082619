const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(wins){
let result = wins.find(wins => wins.result === "W");
 return result ? result.year : undefined
}