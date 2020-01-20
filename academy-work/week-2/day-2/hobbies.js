const favorite_hobby = "programming";
const my_hobbies = [
  "eating", "sleeping", 
  favorite_hobby, "repeating" //favorite_hobby is a copy
];
my_hobbies[0] = "electricity"; // leads to mutation of my_hobbies
const robot = {
  "hobbies": my_hobbies, //my_hobbies is a reference
  "model": "Lenovo Thinkpad",
  "processing_speed": 3.2
};
my_hobbies[1] = "linux"; // mutation
my_hobbies[2] = "running code"; // mutation 
const second_robot = robot; // not a copy but rather a reference
second_robot.model = "Macbook Pro"; //mutates robot
second_robot.hobbies = ["multitouch", "os x"]; //mutates robot
robot.hobbies[0] = "not quitting apps when you want them to"; //mutates robot

console.log(my_hobbies)
console.log(robot.hobbies)
console.log("Second robot:", second_robot.hobbies)