document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent Clicked");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child Clicked");
  },
  true
);
