//currying using bind method
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplybytwo = multiply.bind(this, 2, 3);
multiplybytwo(5);

let multiplybythree = multiply.bind(this, 3);
multiplybythree(5);

//currying using closures

let multi = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
let multifour = multi(4);
multifour(5);

let multifive = multi(5);
multifive(5);
