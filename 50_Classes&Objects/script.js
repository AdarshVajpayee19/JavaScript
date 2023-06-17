
// Class and Objects. Constructors

/*
class RailWayForm{

  constructor(n,trainNo,address,time)
  {
    console.log("Constructor Called..."+n+" "+trainNo);
    this.name=n;
    this.address=address;
    this.time=time;
    this.trainNo=trainNo;
  }

  submit()
  {
    alert("Thanks "+this.name+" Form submitted for train number : "+this.trainNo+" Address: "+this.address+" Time : "+this.time);
  }

  cancel()
  {
    this.trainNo=0;
    alert(this.name+ " Form is cancelled for train number : "+this.trainNo+" Address: "+this.address+" Time : "+this.time);
    
  }
  // fill(givenName,trainNo)
  // {
  //   this.name = givenName;
  //   this.trainNo=trainNo;
  // }
}

let adarshForm = new RailWayForm("Adarsh Vajpayee",232323,"Raichur","1:30 PM");
// adarshForm.fill("Adarsh v",232323);
let gnaneshForm = new RailWayForm("Gnanesh Auti",323232,"Gadwal","2:45 AM");
// gnaneshForm.fill("Gnanesh Auti",323232);

adarshForm.submit();
gnaneshForm.submit();
adarshForm.cancel();
gnaneshForm.cancel();
*/

// Inheritance

/*

class Parent{
  constructor(name,color,age)
  {
    this.name=name;
    this.age=age;
    this.color=color;
  }
  old()
  {
    console.log(`${this.name} --> ${this.age}`);
  }
  
  racism()
  {
    console.log(this.color+" in color 😢");
  }
}

class Child extends Parent{
  young()
  {
    console.log(this.name+" is young brother."+this.age);
  }
}

let f = new Parent("Dinesh","red ",50);
let s = new Child("Adarsh","White ",21);

f.old();
s.old();
f.racism();
s.young();

*/


// Method Overiding 


/*
class Employee{
  constructor(name)
  {
    this.name=name;
  }
  logout()
  {
    console.log(this.name+" logged out");
  }
  login()
  {
    console.log(this.name+" logged in");
  }
  requestLeaves(leaves)
  {
    console.log(`Employee ${this.name} has Requested ${leaves} Leaves.`);
  }
}

class Programmer extends Employee{

  constructor(name)
  {
    super(name);
    console.log(`This is a newly written constructor`)
  }
  // constructor() this created automatically.
  // {
  //   super();
  // } if u want to use this.name u can use only when super() used before that.

  requestCoffee(x)
  {
    console.log(this.name+" has requested "+x+" Coffee.");
  }

  requestLeaves(leaves)
  {
    // console.log(`Employee has requested ${leaves + 1} leaves (One Extra)`)
    super.requestLeaves(4)
    console.log("One Extra leave granted.")
  }
}


let e = new Employee("Gnanesh")
e.login()
e.requestLeaves(3)
e.logout()

let p = new Programmer("Sunil")
p.login()
p.logout()
p.requestLeaves(10)
p.requestCoffee(5)
*/


// Static methods

/*
class Animal{
  constructor(name)
  {
    this.name=name;
    // this.name=Animal.capitalize(name);
  }
  walk()
  {
    alert("Animal "+Animal.capitalize(this.name)+" is walking");
  }
  static capitalize(str)
  {
    return str.charAt(0).toUpperCase()+str.substring(1,str.length);
  }
}

let janvar = new Animal("tiger");
janvar.walk()
*/

// Getters and setters in javascript.

class Animal{
  constructor(name)
  {
    this._name=name;
  }
  fly()
  {
    // alert("Animal "+this.name+" is flying");
    console.log("Animal "+this.name+" is flying");
  }
  get name()
  {
    return this._name
  }
  set name(newName)
  {
    this._name=newName;
  }
  
}

class Rabbit extends Animal{
  eatCarrot()
  {
    console.log("Rabbit "+this.name+" eats carrot");
  }
}

let a = new Rabbit("Pakshi");
a.fly()
console.log(a.name)
a.name = "Parinda"
console.log(a.name)

let c = 24;

console.log(a instanceof Animal)
console.log(c instanceof Animal)
console.log(a instanceof Rabbit)
