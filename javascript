1. What is variable?
A variable is used to store a value.
We can store different types of data in it.
In JavaScript, I mainly use let and const.

2. What are data types? 
Data types tell us what kind of value we are storing.
For example, string for text, number for numbers, and boolean for true or false.

3. What is scope?
Scope means where we can access a variable. 
In JavaScript, we have global scope, function scope, and block scope. 

4. What is Hoisting? 
Hoisting means JavaScript processes declarations before executing the code. For example, we can call a function before we declare it. 

5. What is function?
A function is a reusable block of code that performs a specific task. We can call the function whenever we need to perform that task. 

6. What is arrow function?
An arrow function is a shorter way to write a function. It was introduced in ES6. 

7. Different between arrow function vs normal funtion?
The main difference is this, A normal function have their own this, But arrow function take this from their surrounding scope.

const user = {
  name: "Herman",
  sayName: function () {
    const printName = () => {
      console.log(this.name);
    };
    printName();
  }
};
user.sayName(); // Herman

8. What is object in js?
An object stores related data using key-value pairs. For example, we can store user details like name, age, email, mobile number, and address. 
const user = {
  name: "Herman",
  age: 28,
  email: "herman@example.com"
};

9. What is array ?
An array is used to store multiple values in a single variable. We can store a list of users or products in an array.
[1,"string",true,{name:"Herman",age:25}] 

10. What is destructuring in js?
Destructuring is used to extract values from arrays or objects and store them in variables. 

Example:
const user = {
  name: "Herman",
  age: 25
};
const colors = ["red", "blue"]; 

const name = user.name;
const age = user.age;
const { name, age } = user;
const [first, second] = colors;

11. What is spread operator in js?
The Spread operator uses three dot, we can use it to expand or copy the values in an array or object.

const user = {
  name: "Herman",
  age: 25
};
const newUser = {
  ...user,
  city: "Erode"
};

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

12. What is Reset Operator in js?
Reset operator uses three dot, It uses to collect multiple value into a single array.

function addNumbers(...numbers) {
  console.log(numbers);
}
addNumbers(10, 20, 30);

13. Tell me about your self?

Hi, I’m Herman. I’m a Full Stack JavaScript Developer with around 3 years of experience in software development.
My main experience is with JavaScript, React.js, Node.js, Express.js, and Mysql. I have worked on both frontend and backend development, including building user interfaces, developing APIs, handling database operations, and integrating frontend and backend.
I have also worked with Elecron js used to made windows application, React Native used to made mobile applications, Angular js, Vue.js, Mongodb, C#, and Python. I also have knowledge of UI/UX design and prototyping, Linux, and basic PC assembly.
I’m also very interested in AI technologies. I have developed full-stack applications by AI, and this experience made me more interested in AI fullstack development. I’m currently interested in learning more about AI and building applications quickly with highly secure.
I’m always interested in learning new technologies and improving my skills. Now, I’m looking for an opportunity where I can use my full-stack development experience, work with new technologies, and continue growing as a developer and improving my English communication skills.

14. Tell me about your current job?

In my daily work, I mainly handle client-reported bugs and new feature requirements. I test and fix the issues and then update the application.
Apart from development, I also work on UI/UX, photo and video editing when required. For new projects or technologies, I do R&D and create proof of concepts. If there are any AI-related requirements, I also work on those.




15. Tell me about your responsibilites?

My main responsibilities are developing and maintaining web applications, working on frontend and backend development, fixing bugs, implementing new features, testing, and API integration. I also handle R&D and AI-related tasks when required.



16. Explain your daily works?

In my daily work, I mainly handle client-reported bugs and new feature requirements. I test and fix the issues and then update the application.
Apart from development, I also work on UI/UX, photo and video editing when required. For new projects or technologies, I do R&D and create proof of concepts. If there are any AI-related requirements, I also work on those.

17. What is javascript?
Js is a high level, interpreter, dynamic language. 
can we write the code using oops, proceture, functional, event trievent methods.
Mostly use to interactive website in client side and we can do the server side too using node js.


18. What is closure ? 
A closure is a function that remembers and can access variables from its outer function, even after the outer function has finished execution. 

function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}
const counter = outer();
counter(); // 1
counter(); // 2
Here, inner() remembers the count variable from outer(). That's a closure. 

19. What is callback?
 
A callback is a function passed as an argument to another function, which is executed later. 
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function message() {
    console.log("Welcome!");
}
greet("Herman", message);

20. What is Promises ?
The promises used to handle the asynchronus operation in javascript. It has three states: pending, fulfill, rejected

const promise = new Promise((resolve, reject)=>{
let  status = true;
if(status){
resolve("Working good")
}
else{
rejecte("Error")
}
});
promise.then((result)=> console.log(result)).catch((error)=> console.log(error));

21. What is async/await ?
Async/Await is used to handle Promises. It makes asynchronous operations easier to read and write.
async → returns a Promise.
await → waits for the Promise to complete.

async function getData() {
  const result = await fetchData();
  console.log(result);
}

22. What is event loops?
Event loop is a mechanism in javascript, That handle asynchronus operation and execute callbacks when the callstack is empty.

23. What is 'this'?
"this refers to the object that calls the function. Its value depends on how we call the function."
const user = {
  name: "John",
  greet() {
    console.log(this.name);
  }
};
user.greet(); 

23. What is map()?
map() is used to transform each item in an array and return a new array
example:
const numbers = [1, 2, 3];
const result = numbers.map(num => num * 2);
console.log(result);
 [2, 4, 6]

24. What is filter?
Filter() is used to filter items based on a condition.
const numbers = [1, 2, 3, 4];
const result = numbers.filter(num => num > 2);
console.log(result); // [3, 4]

25. What is reduce?
Reduce() is used to combine each item into a single a result.
const cart = [
  { name: "Phone", price: 20000 },
  { name: "Headphones", price: 3000 },
  { name: "Mouse", price: 1000 }
];
const total = cart.reduce((sum, product) => {
  return sum + product.price;
}, 0);
console.log(total); // 24000

26. What is error handling?
Error handling is used to handle errors and prevent the application from crashing.
async function getUser() {
  try {
    const response = await fetch("https://api.example.com/user");
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log("Failed to fetch user:", error);
  }
}
getUser();
