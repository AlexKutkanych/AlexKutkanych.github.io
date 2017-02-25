//js classes
function Human(name, age){
  this.name = name;
  this.age = age;
  this.gender = "male";
  this.height = 188;
  this.weight = 73;
}

function Worker(name, age, salary){
  Human.call(this, name, age);
  this.salary = salary;
  this.work = function(){
    console.log("Let's do some tasks!");
  };
}

function Student(name, age, education, scholarship){
  Human.call(this, name, age);
  this.education = education;
  this.scholarship = scholarship;
  this.watchSerials = function(){
    console.log("Nice serial");
  };
}

Student.prototype = new Human();
Worker.prototype = new Worker();
// Student.prototype = new Worker();

var Sasha = new Worker("Alex", 23, 1000);
console.log(Sasha.name + " "+ Sasha.age + " " + Sasha.salary);
Sasha.work();

var Vova = new Student("Vova", 20, "Uzhgorod", 100);
console.log(Vova.name + " " + Vova.age + " "+ Vova.education);
Vova.watchSerials();

// Vova.work();
