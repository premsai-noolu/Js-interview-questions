const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("P1 pass");
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("P2 Fails");
  }, 2000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("P3 pass");
  }, 3000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log("promise all", res))
  .catch((err) => console.error("promise all", err));

Promise.allSettled([p1, p2, p3])
  .then((res) => console.log("promise allsettled", res))
  .catch((err) => console.error("promise allsettled", err));

Promise.race([p1, p2, p3])
  .then((res) => console.log("promise race", res))
  .catch((err) => console.error("promise race", err));

Promise.any([p1, p2, p3])
  .then((res) => console.log("promise any", res))
  .catch((err) => console.error("promise any", err));
