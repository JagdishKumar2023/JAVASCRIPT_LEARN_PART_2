// Global variable vs Local variable

let car = "Audi"; //Global variable is apply for sheet and outside the funtion . (Do Not use Multiply name as the same variable)

function add() {
  let result = 33 * 4; //local variable are used internal funtion .(this funtion is used Multiply time as same varible)
  console.log(result);
}
function sub() {
  let result = 5 + 50;
  console.log(result);
}

add();

sub();
