// let counter = 0;
// let getData = function () {
//   console.log("fetching " + counter++);
// };

// let debounce = function (fn, d) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       getData.apply();
//     }, d);
//   };
// };

// let betterfunction = debounce(getData, 300);

let counter = 0;
function getData() {
  console.log("fetching Data.....", counter++);
}

function doSomemagic(fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
}

const betterfunction = doSomemagic(getData, 1000);
