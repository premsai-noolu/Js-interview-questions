//false ---> bubbling  ---> event bubbles up from the element.
//true ----> capturing ----> event goes down to the element.

// if there are some true and false then the event first follows capturing and after it follows bubbling.

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
