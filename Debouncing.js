let counter = 0;
let getData = function () {
  console.log("fetching " + counter++);
};

let debounce = function (fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply();
    }, d);
  };
};

let betterfunction = debounce(getData, 300);
