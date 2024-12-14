let arr = ["srinu", "radha"];
const obj = {
  name: "prem",
  city: "Vizag",
  userdetails: function () {
    console.log(this.name + " " + this.city + " " + this.age);
  },
};

const obj2 = {
  name: "Anil",
  age: 23,
};

const obj3 = {
  name: "lux",
};

obj2.__proto__ = obj;
obj3.__proto__ = obj2;

obj.userdetails();

obj2.userdetails();

obj3.userdetails();
