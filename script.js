//var vs let vs const
var i = 1;
i = 0;

// reference type array
const arry = [1,2];
arry.push(3);
const obj = {id : 1};
obj.id = 2;
console.log(obj);

// variable hoisting
age = 10;
console.log(age);
var age;

// arrow functions
function test() {
    console.log("hello");
}
 var arrowFn = () => console.log("hello");
var sum = (a,b) =>  { const c = 10; return a+b+c};
console.log(sum(2, 3))

setInterval(()=> console.log("hello"), 1000);

// rebinding 'this' in function 
var person = {id: 1, name : 'john', walk : function() {console.log(this)}};
var temp = person.walk.bind(person);
temp();

// nested arrow function
var nestFunc = ()=> ()=> ()=> console.log("hello");
nestFunc()()();

// filtering array
const arry = [
    {id : 1, name: 'a', active: true},
    {id : 2, name: 'b', active: false},
];
console.log(arry.filter(function(single){return single.active === true;}))
console.log(arry.filter(single =>  single.active))

// map function to transform data
const arry= ['red', 'blue'];
console.log(arry.map(color => "<li>"+color+"</li>" ));

// object destructuring
const address = {street : 'new road', province: 'bagmati', country : 'Nepal'};
const street = address.street;
const province = address.province;
const country = address.country;

const {country: test} = address;
console.log(test);

// spread operator to combine array & add new elements
const arry1 = [1,2,3];
const arry2 = [5,6,7];
const obj = {id: 1, name:'test'};
const obj2 = {address: 'address'}

console.log([...arry1,'a',...arry2,'b']);
console.log({...obj,...obj2});

// class
class person {
    constructor(name)
    {
        this.name = name;
    }
    talk(){
        console.log(this.name);
    }
}

const objPerson = new person('john');
objPerson.talk();
console.log("hi")


// setting up babel for converting ES6 to javascript (Optional)
//https://babeljs.io/setup#installation