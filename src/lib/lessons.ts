import { Icons } from '@/components/icons';
import type { Lesson } from '@/types';
import { ArrowRightLeft, Bot, CaseSensitive, CircleDot, Code, GitCommitHorizontal, Heater, Hourglass, MousePointerClick, Repeat, Rows3, ToyBrick, Variable } from 'lucide-react';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Hello, Console!',
    introduction: "Welcome to your coding adventure! The first step in programming is often to send a message. We'll use the 'console', a powerful tool for developers.",
    explanation: "The console is your direct line of communication for checking what your code is doing. In real projects, you'd open your browser's 'Developer Tools' to see these messages. Here, for learning, they'll conveniently appear in the 'Output' panel. Beyond `console.log()`, there are other types, like `console.warn()` for warnings and `console.error()` for problems.",
    prompt: "Let's try it! The editor has examples for `log`, `warn`, and `error`. Run the code to see how they look different in the output. Try changing the messages to see it update!",
    starterCode: `// The console is your best friend for debugging.
// In a real project, these messages appear in your browser's developer console.

// Use for general information.
console.log("This is a standard log message.");

// Use for warnings about potential issues.
console.warn("This is a warning. Something to be aware of!");

// Use for errors that have occurred.
console.error("This is an error. Something went wrong!");
`,
    solution: `console.log("Hello, JavaScript!");
console.warn("This could be a problem.");
console.error("There was an error!");`,
    icon: Bot,
  },
  {
    id: 2,
    title: 'Storing Information',
    introduction: "Imagine you want to remember something, like a score in a game or a user's name. You need a place to store it. In programming, we use 'variables' for this.",
    explanation: "Think of a variable as a labeled box where you can keep a piece of information. We create a variable using the `let` keyword, followed by a name, an equals sign, and the value you want to store. For values that will never change, we use `const`.",
    prompt: "Below, I've created a variable called `message` to hold some text. Can you create a new variable called `yourName` and store your name in it? Then, use `console.log()` to display it.",
    starterCode: `// We use 'let' for variables whose values might change.
let message = "This is a stored message.";
console.log(message);

// We use 'const' for values that won't change.
const birthYear = 2024;
console.log("This app was created in", birthYear);

// Now, it's your turn. Create a 'const' variable for your name.
// const yourName = "...";
// console.log("Hello,", yourName);
`,
    solution: `let message = "This is a stored message.";
console.log(message);
const birthYear = 2024;
console.log("This app was created in", birthYear);
const yourName = "Alex";
console.log("Hello,", yourName);`,
    icon: Variable,
  },
  {
    id: 3,
    title: 'Kinds of Data',
    introduction: "Variables can hold different kinds of information, not just text. These are called 'data types'. Let's explore the most common ones.",
    explanation: "JavaScript has several primary data types: `Strings` for text (always in quotes), `Numbers` for math, and `Booleans` for true/false logic. These are the fundamental building blocks of your programs.",
    prompt: "I've set up examples of a string, a number, and a boolean. Try creating your own variables for each type. For example, create a `const` for your age (a number) and another for whether it's sunny outside (a boolean).",
    starterCode: `// A String is just text.
const greeting = "Hello there!";

// A Number can be an integer or a decimal.
const score = 100;
const pi = 3.14;

// A Boolean is either true or false.
const isLoggedIn = true;

console.log("A string:", greeting);
console.log("A number:", score);
console.log("A boolean:", isLoggedIn);

// Try making your own!
`,
    solution: `const favoriteFood = "Pizza";
const currentYear = 2024;
const isLearning = true;
console.log("My favorite food is:", favoriteFood);
console.log("The year is:", currentYear);
console.log("Am I learning? ", isLearning);`,
    icon: ToyBrick,
  },
  {
    id: 4,
    title: 'Working with Data',
    introduction: "What good is data if you can't do anything with it? 'Operators' are the symbols we use to perform actions, like math or comparisons.",
    explanation: "You already know many of these! Arithmetic operators (`+`, `-`, `*`, `/`) do math. Comparison operators (`>`, `<`, `===`) check how two values relate. Logical operators (`&&` for 'and', `||` for 'or') combine true/false statements.",
    prompt: "Play around with the operators below. Calculate the total cost of two items. Then, change the `age` or `ticketPrice` to see how the comparison results change. What happens if you try to add a number and a string?",
    starterCode: `// Arithmetic Operators
const price1 = 10;
const price2 = 15;
const total = price1 + price2;
console.log("Total price:", total);

// Comparison Operators
const age = 21;
const isAdult = age >= 18; // is age greater than or equal to 18?
console.log("Is an adult?", isAdult);

// Logical Operators
const hasTicket = true;
const canEnter = isAdult && hasTicket; // is an adult AND has a ticket?
console.log("Can enter concert?", canEnter);`,
    solution: `const oranges = 5;
const apples = 10;
const totalFruit = oranges + apples;
console.log("Total fruit:", totalFruit);

const myAge = 25;
const canRentCar = myAge >= 25;
console.log("Can I rent a car?", canRentCar);

const isRaining = false;
const hasUmbrella = true;
const willIStayDry = !isRaining || hasUmbrella; // is it NOT raining OR do I have an umbrella?
console.log("Will I stay dry?", willIStayDry);`,
    icon: CaseSensitive,
  },
    {
    id: 5,
    title: 'Reusable Recipes',
    introduction: "If you're doing the same thing over and over, you can bundle that code into a 'function'. It's like a recipe you can use whenever you need it.",
    explanation: "A function is a reusable block of code. You define it once with the `function` keyword, give it a name, and specify what it does. You can pass in data through 'parameters' (the ingredients) and it can give you a result back with `return`.",
    prompt: "I've created a function `greet` that takes a `name` and prints a welcome message. Can you create a new function called `add` that takes two numbers (`a` and `b`) as parameters and returns their sum? Then, call it with a couple of numbers and log the result.",
    starterCode: `// This function takes one parameter: 'name'.
function greet(name) {
  console.log("Hello, " + name + "!");
}

// We 'call' the function to run it.
greet("Alice");
greet("Bob");

// Now, create a function to add two numbers.
// function add(a, b) { ... }
`,
    solution: `function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice");
greet("Bob");

function add(a, b) {
  return a + b;
}

const sum = add(5, 7);
console.log("The sum is:", sum);`,
    icon: GitCommitHorizontal,
  },
  {
    id: 6,
    title: 'Making Decisions',
    introduction: "How does code make choices? It uses 'conditional logic'. This lets your program do different things based on whether a condition is true or false.",
    explanation: "The `if` statement is the core of decision-making. If the condition in the parentheses is true, the code inside the curly braces runs. You can add an `else` block to run code if the condition is false.",
    prompt: "The code below checks if a temperature is hot. Change the value of `temperature` to see the message change. Then, try adding an `else if` block to check for a 'perfect' temperature (e.g., if the temperature is exactly 75).",
    starterCode: `const temperature = 85;

if (temperature > 80) {
  console.log("It's a hot day!");
} else {
  console.log("It's not too hot.");
}

// Try adding an 'else if' for a different condition.
// if (temperature > 80) { ... }
// else if (temperature === 75) { ... }
// else { ... }
`,
    solution: `const temperature = 75;

if (temperature > 80) {
  console.log("It's a hot day!");
} else if (temperature === 75) {
  console.log("It's the perfect temperature!");
} else {
  console.log("It's either cool or cold.");
}`,
    icon: CircleDot,
  },
  {
    id: 7,
    title: 'Doing Things Over',
    introduction: "Sometimes you need to repeat an action multiple times. Instead of copying and pasting code, we use 'loops'.",
    explanation: "A `for` loop is perfect for when you know exactly how many times you want to repeat something. It has three parts: a starting point (initialization), an ending condition (when to stop), and an increment (how to get to the next step).",
    prompt: "This loop counts from 1 to 5. Can you modify it to count from 1 to 10? What if you wanted it to only log the even numbers? (Hint: you can use the remainder operator `%` and an `if` statement inside the loop).",
    starterCode: `// This loop will run 5 times.
// 'i' starts at 1; the loop continues as long as 'i' is less than or equal to 5; 'i' increases by 1 each time.
for (let i = 1; i <= 5; i++) {
  console.log("This is loop number", i);
}
`,
    solution: `// Count to 10
for (let i = 1; i <= 10; i++) {
  // Check if the number is even
  if (i % 2 === 0) {
    console.log(i, "is an even number.");
  }
}`,
    icon: Repeat,
  },
  {
    id: 8,
    title: 'Grouped Data: Objects',
    introduction: "While arrays are great for lists, 'Objects' let us group related data together using named keys. They're perfect for representing a single thing, like a user or a car.",
    explanation: "Objects use curly braces `{}` and store data in `key: value` pairs. This makes your data more descriptive. You can access a value using dot notation (e.g., `user.name`) or bracket notation (e.g., `user['name']`).",
    prompt: "I've created an object representing a `book`. Access the `title` and `author` properties and log them. Then, try adding a new property to the object, like `genre: 'Fantasy'`, and log that too.",
    starterCode: `const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  yearPublished: 1937
};

// Accessing properties with dot notation
console.log(book.title);

// Your turn! Access and log the author.
// Then add a new property for the genre.
`,
    solution: `const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  yearPublished: 1937
};

console.log(book.title);
console.log(book.author);

book.genre = "Fantasy";
console.log(book.genre);
console.log(book);`,
    icon: ToyBrick,
  },
  {
    id: 9,
    title: 'Powerful Arrays',
    introduction: "Let's revisit arrays and learn some powerful, modern ways to work with them. These 'array methods' make common tasks much simpler than using a `for` loop.",
    explanation: "Instead of writing loops manually, we can use built-in methods. `.forEach()` runs a function for each item. `.map()` creates a new array by transforming each item. `.filter()` creates a new array with only the items that pass a test.",
    prompt: "I have an array of numbers. Use the `.map()` method to create a new array where each number is doubled. Then, use the `.filter()` method to create another new array that only contains numbers greater than 10. Log both new arrays.",
    starterCode: `const numbers = [1, 5, 10, 15, 20];

// Example with .forEach()
numbers.forEach((number) => {
  console.log("The number is " + number);
});

// Now use .map() to double each number
// const doubled = numbers.map(...)

// Then use .filter() to get numbers > 10
// const largeNumbers = numbers.filter(...)
`,
    solution: `const numbers = [1, 5, 10, 15, 20];

const doubled = numbers.map((number) => {
  return number * 2;
});
console.log("Doubled numbers:", doubled);

const largeNumbers = numbers.filter((number) => {
  return number > 10;
});
console.log("Large numbers:", largeNumbers);`,
    icon: Rows3,
  },
  {
    id: 10,
    title: 'Modern JavaScript',
    introduction: "JavaScript is always evolving. 'ES6' was a major update that introduced features that are now standard. Let's look at two of the most useful: arrow functions and template literals.",
    explanation: "Arrow functions (`=>`) provide a shorter syntax for writing functions. Template literals (using backticks ``) let you embed variables directly into strings without needing `+` signs, making your code much cleaner.",
    prompt: "I've rewritten our `add` function using arrow syntax. Now, rewrite the `greet` function from a previous lesson using an arrow function and a template literal to produce the same 'Hello, name!' message.",
    starterCode: `// Regular function
function add(a, b) {
  return a + b;
}

// Same function as an arrow function
const addArrow = (a, b) => a + b;

console.log("From regular function:", add(2, 3));
console.log("From arrow function:", addArrow(2, 3));

// Now, convert this to an arrow function with a template literal:
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("World");
`,
    solution: `const addArrow = (a, b) => a + b;
console.log("From arrow function:", addArrow(2, 3));

const greetArrow = (name) => {
  console.log(\`Hello, \${name}!\`);
};

greetArrow("World");`,
    icon: Code,
  },
  {
    id: 11,
    title: 'Understanding Scope',
    introduction: "Where your variables live and who can access them is determined by 'scope'. Understanding scope is key to avoiding bugs and writing predictable code.",
    explanation: "Variables declared with `let` or `const` have 'block scope', meaning they only exist within the nearest set of curly braces `{}` (like in an `if` statement or a `for` loop). Variables declared outside any function have 'global scope' and can be accessed from anywhere.",
    prompt: "The code below has a scope-related bug. The `if` block creates a new variable `message` that 'shadows' the one outside. Because of block scope, the final `console.log` can't see the new message. Can you fix it so it prints the correct message?",
    starterCode: `const creature = "Dragon";
let message = "This is a global message.";

if (creature === "Dragon") {
  let message = "It's a mighty " + creature + "!";
  console.log(message);
}

// Why doesn't this log the dragon message?
// Fix the code to make it work.
console.log(message);
`,
    solution: `const creature = "Dragon";
let message = "This is a global message.";

if (creature === "Dragon") {
  // By removing 'let', we re-assign the outer variable
  // instead of creating a new, scoped one.
  message = "It's a mighty " + creature + "!";
}

console.log(message);`,
    icon: ArrowRightLeft,
  },
  {
    id: 12,
    title: 'Waiting for Code',
    introduction: "Some tasks, like fetching data from a server, take time. 'Asynchronous' JavaScript lets us perform these tasks without freezing the entire program while we wait.",
    explanation: "Modern JavaScript uses `async` and `await` to handle asynchronous operations. An `async` function always returns a `Promise` (a placeholder for a future value). The `await` keyword pauses the `async` function until the Promise settles, and then returns the result.",
    prompt: "I've created a fake function `fetchData` that simulates a network request. It's an `async` function. Call this function and use `await` to get the result, then log the 'data retrieved' message to the console.",
    starterCode: `// This function simulates fetching data from a server.
// It returns a Promise that resolves after 1 second.
const fetchData = async () => {
  console.log("Fetching data... please wait.");
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { data: "Here is your data!" };
};

// We need an async 'main' function to use await.
const main = async () => {
  console.log("Starting the program.");
  // Your code here: call fetchData and log its result.
  console.log("Program finished.");
};

main();
`,
    solution: `const fetchData = async () => {
  console.log("Fetching data... please wait.");
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { data: "Here is your data!" };
};

const main = async () => {
  console.log("Starting the program.");
  const result = await fetchData();
  console.log(result.data);
  console.log("Program finished.");
};

main();`,
    icon: Hourglass,
  },
  {
    id: 13,
    title: 'Controlling the Page',
    introduction: "Let's go back to where we started: the web page itself! JavaScript is the key to making web pages interactive and dynamic. This is often called 'DOM Manipulation'.",
    explanation: "The 'DOM' (Document Object Model) is a tree-like representation of your HTML. JavaScript can access any element, change its style, content, or even create new elements from scratch and add them to the page.",
    prompt: "Let's use the canvas again. Get the canvas element by its ID ('canvas'), and then change its background color using `canvas.style.backgroundColor`. Try 'lightblue' or '#E7A6A1'. What other styles can you change?",
    starterCode: `// We can get any element on the page using its ID.
const canvas = document.getElementById('canvas');

// The 'style' property lets us change CSS.
// canvas.style.backgroundColor = 'lightblue';
// canvas.style.border = '2px solid #7B4B94';
`,
    solution: `const canvas = document.getElementById('canvas');
canvas.style.backgroundColor = 'lightblue';
canvas.style.border = '2px solid #7B4B94';
canvas.style.borderRadius = '10px';

const output = document.getElementById('visual-output');
output.innerText = "I changed this with JavaScript!";`,
    icon: Heater,
  },
    {
    id: 14,
    title: 'Responding to Events',
    introduction: "The most powerful part of client-side JavaScript is responding to user actions. We call these 'events'.",
    explanation: "You've already seen the 'click' event. There are many others, like `mousemove` (when the mouse moves over an element), `keydown` (when a key is pressed), and `submit` (when a form is submitted). We use `addEventListener` to listen for them.",
    prompt: "Let's make our canvas interactive. Add a 'mousemove' event listener to the `canvas`. Inside the listener function, draw a small circle on the canvas at the mouse's coordinates. The coordinates are available in the event object passed to your function (`e.clientX`, `e.clientY`).",
    starterCode: `const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// The event listener function receives an 'event' object with details about the event.
canvas.addEventListener('mousemove', (e) => {
  // The mouse coordinates are relative to the viewport, so we need to adjust them.
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Let's log the coordinates to see what they look like.
  console.log("Mouse is at:", x, y);

  // Now, try drawing something at these coordinates!
  // ctx.fillStyle = '#D95C5C';
  // ctx.fillRect(x, y, 5, 5); // A tiny 5x5 square
});`,
    solution: `const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  ctx.fillStyle = '#D95C5C';
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2); // Draw a circle with a 5px radius
  ctx.fill();
});`,
    icon: MousePointerClick,
  },
  {
    id: 15,
    title: 'Final Challenge',
    introduction: "You've learned the core concepts of JavaScript! Now it's time to put it all together. This final challenge combines everything you've learned.",
    explanation: "This challenge will require you to use variables, objects, arrays, loops, conditionals, functions, and event listeners. The goal is to create a simple, interactive drawing application.",
    prompt: "The goal: when the user clicks and drags their mouse on the canvas, it should draw a line. When they release the mouse, it should stop drawing. You'll need to track the mouse state (is it down?) with a boolean, listen for `mousedown`, `mouseup`, and `mousemove` events, and use the canvas context to draw lines (`moveTo`, `lineTo`, `stroke`). Good luck!",
    starterCode: `const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// We need to track if the mouse button is pressed.
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return; // stop if not drawing

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.strokeStyle = '#D95C5C';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
  
  // Update the last position
  [lastX, lastY] = [x, y];
}

// Event Listeners
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  [lastX, lastY] = [e.clientX - rect.left, e.clientY - rect.top];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
// What happens if the mouse leaves the canvas?
canvas.addEventListener('mouseout', () => isDrawing = false);`,
    solution: `const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  ctx.strokeStyle = '#D95C5C';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
  [lastX, lastY] = [x, y];
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  [lastX, lastY] = [e.clientX - rect.left, e.clientY - rect.top];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);`,
    icon: Icons.logo,
  },
];
