let name1 = {
  firstName: "premsai",
  lastName: "Noolu",
};

let printfullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};

let name2 = {
  firstName: "Anil Kumar",
  lastName: "Noolu",
};

//call
printfullName.call(name1, "Vizag", "Ap");
printfullName.call(name2, "Rjmnundry", "Ap");
//Apply
printfullName.apply(name1, ["kakinada", "Ap"]);

//bind
let printmyname = printfullName.bind(name2, "amlapuram", "AP");
console.log(printmyname);
printmyname();
