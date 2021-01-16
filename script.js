/* const ul = document.querySelector('.info');
const link1= document.querySelector('.link');
const el = document.getElementsByTagName('h1');
let arr= ["hello","world","javascript","demo","start1"];
let s=``;
arr.forEach((element)=>{
    s+= `<li>${element}</li>`;
});

console.log(s);
ul.innerHTML = s;
console.log(el);
el[0].innerHTML="hello world java";
el[0].style.color="Orange";
link1.setAttribute('href',"https://www.youtube.com/watch?v=wKBu_dEaF9E&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=6");
*/

/*

let ob ={
    name: "java",
    version: "12",
    display(){
        console.log(this.name+" "+this.version);
       let arrow =()=>{
            console.log(this.name+" "+ this.version);
        }
        arrow();
    },   
}
ob.display();

*/


/*

const ul = document.querySelector('.newsarea');

let inhtml='<div class="row">';

let news;

const getnews = (query) => {

  fetch(`https://gnews.io/api/v4/search?q=${query}&lang=en&token=ccb24ddae342abbcc4eb98bfbba37fc8`)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
     // console.log(data.articles[5].title);
     let newsarray = data.articles;
    // console.log(arr);
    newsarray.forEach((arr,index) => {

      if(index==0){
        inhtml+= `
        <div class="jumbotron col-lg-9">
        <div class="row col-lg-10">
            <div class="col-lg-6">
                <h3>${arr.title}</h3>
                <p>${arr.description}</p>
                <p>read more at <a href="${arr.url}" target="blank"> <b>${arr.source.name}</b></a></p>
            </div>                              
            <div class="col-lg-3">
                <img src="${arr.image}" style="height: 300px; width: 500px;" class="pull-right">
            </div>               
        </div>
        </div>
        `;
      }

      else {
        inhtml+= `
     <div class="card col-md-3">
      <img src="${arr.image}" alt="news-image" style="width:100%; height:250px ">
      <div class="container">
        <h4>${arr.title}</h4>
        <p>read more at <a href="${arr.url}" target="blank"> <b>${arr.source.name}</b></a></p>
      </div>
    </div>
      `;  }
    });

  }).then(function (){
      ul.innerHTML= inhtml;
  }).catch(  err => {
    //console.log("Error "+err);
    ul.innerHTML="<h1>Failed to load news!</h1><h1>Check your internet connection..... :(</h1>";
  })
};

getnews("america");

*/


/*
function print(){
  console.log(this);
  console.log("hello");
}

let fun = (a,b) => {
  console.log(this);
  return a+b;
};

console.log(fun(2,3));
print();


names="johnj";
const ob= {
  names: "john",
  print: function (){
    console.log(arguments);
    for(x=0;x<arguments.length;x++){
      console.log(arguments[x]);
    }
    console.log("hello " + this.names);
  },

  print1 : ()=>{
    console.log("hello " + this.names);
  }
};

ob.print(1,2,3,4,5,6,7,8,9,10);
ob.print1();



// ES5 classes
const Person = function(name,age){
  this.name=name;
  this.age=age;
}
Person.prototype.calcAge = function(){
  console.log(this.age);
}
Person.prototype.title= 'ghostrider';
Person.hey= function(){
  console.log("hey there!");
}

const ob1 = new Person("abc",25);
console.log(ob1);
ob1.calcAge();
console.log(ob1.title);
console.log(ob1.__proto__);
Person.hey();

// ES6 classes

class Car{
  static brand= "Honda";
  mileage=25; 
  car_name;
  car_speed; 
  mode= ["auto","manual","semi-auto","AI"];
  model;
  constructor(name,speed){
    this.car_name= name;
    this.car_speed=speed;
  } 

  //prototype functions
  drive(){
    console.log("running",this.car_name,"at a speed of ",this.car_speed);
  }
  checkMileage(){
    console.log(this.mileage);
  }

  //getters and setters
  get mode(){
    return this.mode;
  }
  set modelno(modelno){
    this.model=modelno;
  }

  //static methods
  static description(){
    console.log("this is a",this.brand,"car.");
  }

}


const hondacity = new Car("Honda City",150);
console.log(hondacity);
hondacity.drive();
hondacity.checkMileage();
hondacity.modelno="DL50HC5"; 
hondacity.mode.push("race");
console.log(hondacity.mode);
console.log(hondacity.model);
Car.description();


const car= {
  create (name,age){
    this.name=name;
    this.age=age;
  },
  display(){
    console.log("hello");
  }
};

const h1 = Object.create(car);
h1.display();


*/












const ct = document.querySelector('.cardtext');
const  b = document.querySelector('.guess');
const  n = document.querySelector('.numdis');
const  nd = document.querySelector('.number');
const  en = document.querySelector('.guessnum');
const  re = document.querySelector('.restart');



const num = Math.floor(Math.random()*100) +1 ;
console.log(num);

const fun =function calc(){

  if(en.value==num)
  {
    ct.textContent="Correct Guess";
    n.style.color="green";
    n.textContent=num;
    nd.style.border= "4px solid green";
    confetti.start();
  }
  else if(en.value>num){
    if(en.value-num>10)
    ct.textContent="Too High";
    else
    ct.textContent="Just High";
    n.style.color="red";
    nd.style.border= "4px solid red";
  }
  else{
    if(num-en.value>10)
    ct.textContent="Too Low";
    else
    ct.textContent="Just Low";
    n.style.color="red";
    nd.style.border= "4px solid red";
  }
}


window.addEventListener('keydown',function(e){
  if(e.key=="Enter"){
    if(en.value==num)
  {
    ct.textContent="Correct Guess";
    n.style.color="green";
    n.textContent=num;
    nd.style.border= "4px solid green";
    confetti.start();
  }
  else if(en.value>num){
    if(en.value-num>10)
    ct.textContent="Too High";
    else
    ct.textContent="Just High";
    n.style.color="red";
    nd.style.border= "4px solid red";
  }
  else{
    if(num-en.value>10)
    ct.textContent="Too Low";
    else
    ct.textContent="Just Low";
    n.style.color="red";
    nd.style.border= "4px solid red";
  }
  }
});
b.addEventListener('click',fun);

/*
window.addEventListener('load',function(){
  console.log("loaded");
});
*/

/*
document.addEventListener('keydown',function(e){
  console.log(e);
})
*/