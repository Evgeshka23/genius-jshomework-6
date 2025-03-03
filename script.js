function Calculator() {
  this.read = function () {
    this.a = +prompt("Enter a:", 0);
    this.b = +prompt("Enter b:", 0);
  };
  this.sum = function () {
    return console.log(this.a + this.b);
  };
  this.mul = function () {
    return console.log(this.a * this.b);
  };
}

let calculator = new Calculator();
calculator.read();
calculator.sum();
calculator.mul();
