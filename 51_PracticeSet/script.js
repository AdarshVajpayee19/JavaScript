// 1.Create a javascript class to create a complex number.Create a constructor
// to set the real and the complex part

// 2. Write a method to add two complex numbers in the above class.

class Complex{
  constructor(real, imag){
    this.real = real;
    this.imag = imag;
  }
  add(num)
  {
    this.real=this.real+num.real;
    this.imag=this.imag+num.imag;
  }
}

let a = new Complex(2,4)
let b = new Complex(6,5)
a.add(b)
console.log(`${a.real}+${a.imag}i`);

// 3.Create a class student from a class Human Override a method and see changes
// 4.See student is an instance of the Human  using Instanceof Keyword.

class Human{
  constructor(name,favFood)
  {
    this.name=name;
    this.favFood=favFood;
  }
  eat(){
    console.log(`${this.name} is walking with his ${this.favFood}.`)
  }
}

class Asur extends Human{
  eat(){
    console.log(`${this.name},Asur Saala is walking with his Favourite Food ${this.favFood}.`)
  } 
}

let o = new Asur("Sunil "," Rice and Dal ")
o.eat()
console.log(o instanceof Human)



// 5. Write Complex number program using getters and setters

class Complex1{
  constructor(real, imag){
    this.real = real;
    this.imag = imag;
  }
  add(num)
  {
    this.real=this.real+num.real;
    this.imag=this.imag+num.imag;
  }
  get real()
  {
    return this._real;
  }
  get imag()
  {
    return this._imag;
  }
  set real(newReal)
  {
    this._real=newReal;
  }
  set imag(newImag)
  {
    this._imag=newImag;
  }
}

let a1 = new Complex1(2,4)
a1.real = 20
a1.imag = 20
let b1 = new Complex1(6,5)
a1.add(b1)
console.log(`${a1.real}+${a1.imag}i`);
