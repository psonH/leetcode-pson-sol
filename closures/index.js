// let counter = 0;
function outer() {
  var counter = 0;
  function inner() {
    // let counter = 0;
    counter++;
    console.log(counter);
  }
  return inner;
}

const newFunc = outer();
newFunc();
newFunc();

const anotherFunc = outer();
anotherFunc();
anotherFunc();
