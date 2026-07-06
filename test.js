// // // Ek program banao jisme:
// // // - userName = "Shahbaz"
// // // - userAge = 17
// // // - hasMembership = false
// // // let userName = "Shahbaz";
// // // let userAge = 17;
// // // let hasMembership = false;
// // // if(userAge >=18 && hasMembership){
// // //     console.log("Welcome VIP Member!");
// // // }else if(userAge >=18 && !hasMembership){
// // //     console.log("Welcome! Please get membership.");
// // // }else{
// // //     console.log("Sorry, adults only!");
// // // }
// // // let ageMessage = userAge >= 18 ? `${userName} is an adult` : `${userName} is a minor`;
// // // console.log(ageMessage);
// // for ( let i=1; i<=10; i++){
// //     if(i%2===0){
// //         console.log('even',i)
// //     }
// // }
// // //Apna naam, umar, aur city store karo variables mein — aur console par print karo.

// // let name='ali'
// // let age=11
// // let city='lahore'
// // console.log(`${name} ${age} ${city}`)
// // let a=10;
// // let b=20;
// // let result=a+b;
// // console.log(result);
// // let string='abcd';
// // let number=99;
// // let boolean=true;
// // let undefined='';
// // console.log(string,number,boolean,undefined);
// // //day 2
// // let temperature=45;
// // if(temperature>30){
// //     console.log('garmi');
// // }else{
// //     console.log('thandi');
// // }
// // let marks=80;
// // if(marks>=90){
// //     console.log('grade A');
// // }else if(marks>=80){
// //     console.log('grade B');
// // }else if(marks>=70){
// //     console.log('grade C');
// // }else if(marks>=60){
// //     console.log('grade D');
// // }else{
// //     console.log('grade F');
// // }
// // //Ek program likho jo 3 numbers mein se sab se bada number find kare.
// // let num1=10;
// // let num2=20;
// // let num3=30;
// // if(num1>num2 &&num1>num3){
// //     console.log(num1,'is greater')
// // }else if(num2>num1 && num2>num3){
// //     console.log(num2,'is greater')
// // }else{
// //     console.log(num3,'is greater')
// // }
// // //day 3
// // let i=1;
// // while(i<=10){
// //     console.log(`i = ${i}`);
// //     i++;
// // }
// // let u=1;
// // while(u<=50){
// //     if(u%2===0){
// //         console.log('even',u);
// //     }
// //     u++;

// // }
// // let sum=0;
// // for (let v=1; v<=100; v++){
// //     sum=sum+v;
// // }
// // console.log('sum of 1 to 100 ', sum);





// // //function decleration means ka simple function bana ka decleare kar dana or arrow function means ka modern way h or short ha
// // function declearr(){
// //     console.log('hello world')
// // }
// // console.log(declearr())
// // const arrow=()=>{
// //     console.log('Hello world')
// // }
// // console.log(arrow())


// // ==========================================
// // TASK: TODO LIST — CORRECTED
// // ==========================================

// let todos = ["Namaz parhni", "Quran parhna", "Coding karna"];
// console.log("📝 Initial Todos:", todos);

// // 1. End mein add karo
// todos.push("Exercise karna");
// console.log("After push:", todos);  // array print karo, push ka return nahi

// // 2. Start mein add karo
// todos.unshift("Nasta karna");
// console.log("After unshift:", todos);

// // 3. Aakhri remove karo
// let removedLast = todos.pop();
// console.log("Removed last:", removedLast);  // "Exercise karna"
// console.log("After pop:", todos);

// // 4. Pehla remove karo
// let removedFirst = todos.shift();  // ✅ spelling fix
// console.log("Removed first:", removedFirst);  // "Nasta karna"
// console.log("After shift:", todos);

// // 5. Check karo "Coding karna" (exact case match)
// let check = todos.includes("Coding karna");  // ✅ small 'k'
// console.log("Has 'Coding karna'?", check);  // true

// // 6. Index maloom karo
// let index = todos.indexOf("Quran parhna");
// console.log("Index of 'Quran parhna':", index);

// // 7. Pehle 2 ka naya array
// let firstTwo = todos.slice(0, 2);
// console.log("First two:", firstTwo);

// // 8. Original kya bacha
// console.log("Original remaining:", todos);




// // ==========================================
// // BONUS: FUNCTION + ARRAY COMBO — FULL CODE
// // ==========================================
// console.log('///////////////////////////////////////////////');
// // Function 1: addTodo
// const addTodo = (todoList, newTodo)=>{
//     todoList.push(n)
// }
// const addTodo = (todoList, newTodo) => {
//     todoList.push(newTodo);
//     return todoList;
// };

// // Function 2: removeLastTodo
// const removeLastTodo = (todoList) => {
//     return todoList.pop();
// };

// // ==========================================
// // TESTING
// // ==========================================
// let myTodos = ["Namaz", "Quran", "Coding"];
// console.log("🟢 Original:", myTodos);

// // Test addTodo
// let result1 = addTodo(myTodos, "Exercise");
// console.log("After addTodo:", result1);
// // Expected: ["Namaz", "Quran", "Coding", "Exercise"]

// // Test removeLastTodo
// let removed = removeLastTodo(myTodos);
// console.log("Removed item:", removed);
// // Expected: "Exercise"

// console.log("Final todos:", myTodos);
// // Expected: ["Namaz", "Quran", "Coding"]

// ==========================================
// SET 1: ARRAY CREATE KARO AUR ACCESS KARO
// ==========================================

// // Task 1: Apne 5 doston ke naam ka array banao
// let friends = ["ali", "ahmad", "fatima", "sara", "noor"];  // ← Bharo isko

// // Task 2: Console mein pehla dost print karo (index 0)
// console.log('first friend',friends[0]);


// // Task 3: Console mein aakhri dost print karo
// console.log('last friend',friends[friends.length-1]);

// // Task 4: Console mein total kitne dost hain print karo
// for( let friend of friends){
//     console.log('total friends:',friend)
// }
// // Task 5: Teesra dost (index 2) change karo — naya naam do

// friends.splice(2,1,'piya')
// // Task 6: Poora array print karo
// console.log(friends)

// // ==========================================
// // SET 2: RED GROUP — SAB METHOD PRACTICE
// // ==========================================

// // Starting array
// let playlist = ["Song A", "Song B", "Song C"];
// console.log("🎵 Starting playlist:", playlist);
// console.log("----------------------------------");

// // Task 1: PUSH — End mein "Song D" add karo, phir console.log karo

// playlist.push('song D')
// console.log('after push',playlist);
// // Task 2: POP — Aakhri song remove karo, console.log batao kya remove hua
// playlist.pop();
// console.log('after pop',playlist);

// // Task 3: UNSHIFT — Start mein "Song Z" add karo, phir console.log karo
// playlist.unshift('song Z');
// console.log('after unshift',playlist);

// // Task 4: SHIFT — Pehla song remove karo, console.log batao kya remove hua
// playlist.shift();
// console.log('after shift',playlist);


// // Task 5: SPLICE — Index 1 se 1 song remove karo, phir console.log karo
// playlist.splice(1,1);
// console.log('after splice',playlist);

// // Task 6: Final playlist print karo — kya bacha?
// console.log(playlist)



// // ==========================================
// // SET 3: GREEN GROUP — SAB METHOD PRACTICE
// // ==========================================

// let fruits = ["🍎 Apple", "🍌 Banana", "🥭 Mango", "🍊 Orange", "🍇 Grapes"];
// console.log("🍎 Fruits:", fruits);
// console.log("----------------------------------");

// // Task 1: SLICE — Pehle 3 fruits ka naya array banao

// let b=fruits.slice(0,3);
// console.log(b)
// // Task 2: INCLUDES — Check karo "🥭 Mango" array mein hai?
// let c=fruits.includes("🥭 Mango");
// console.log(c)

// // Task 3: INDEXOF — "🍊 Orange" kis index pe hai?
// let d=fruits.indexOf("🍊 Orange");
// console.log(d)

// // Task 4: CONCAT — fruits array mein ["🍋 Lemon", "🍐 Pear"] jodo (naya array)
// let f=fruits.concat("🍋 Lemon", "🍐 Pear");
// console.log(f)

// // Task 5: JOIN — Saare fruits ko " | " ke saath jodo
// let g=fruits.join('|')
// console.log(g)

// // Task 6: Original fruits array print karo — change hua ya nahi?
// console.log(fruits)
// // ==========================================
// // SET 4: MIXED CHALLENGE — KHUD SOCHO
// // ==========================================

// let numbers = [10, 20, 30, 40, 50];
// console.log("🔢 Numbers:", numbers);
// console.log("----------------------------------");

// // Q1: 30 kis index pe hai? Kaunsa method use karoge?
// let a=numbers.indexOf(30);
// console.log(a);
// // Q2: Array ke end mein 60 add karo. Kaunsa method?
// numbers.push(60);
// console.log(numbers)
// // Q3: Pehla number remove karo. Kaunsa method?
// numbers.shift();
// console.log(numbers)
// // Q4: Kya 100 array mein hai? Kaunsa method?
// let n=numbers.includes(100);
// console.log(n)
// // Q5: Index 1 se 3 tak ki copy nikalo. Kaunsa method?
// let r=numbers.slice(1,3);
// console.log(r)
// // Q6: Array ko string "10-20-30-40-50" mein badlo. Kaunsa method?
//  let o=numbers.join("|")
//  console.log(o)
// // 👆 Har sawal ka jawab code mein likho


// 1. Ek array banao - 3 friends ke naam
// let numbers = [1, 2, 3, 4, 5];
// let db=numbers.map((num)=>{
//     return num*5;
// })
// console.log(db)
// let number = [1, 2, 3, 4, 5, 6];
// let ev=number.filter((e)=>{
//     return e%2===0;
// })
// console.log(ev)
// let fruits = ["Apple", "Mango", "Banana"];

// fruits.forEach((fruit)=> {
//     console.log("I like " + fruit);
// });
// let bags = ["book", "lunch", "pencil"];

// let hasPistol = bags.some((item)=> {
//     return item === "pistol";
// });

// console.log(hasPistol);  // false (kisi ke paas nahi)

// // Ab pistol add karo
// bags.push("pistol");
// let nums = [5, 10, 15, 20];
// let to=nums.reduce((a, b) => a * b, 1)
// console.log(to)




// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let t=number.map((num)=>{
//     return num*3
// })
// console.log(t);
// let odd=number.filter((num)=>{
//     return num%2!==0
// });
// console.log(odd);
// let fi=number.reduce((total,num)=>{
//     return total+num
// },0)
// console.log(fi);
// let a=number.find((num)=>{
//     return num>7;
// })
// console.log(a);
// let b=number.some((num)=>{
//     return num>10;
// })
// console.log(b);
// let c=number.every((num)=>{
//     return num>0;
// })
// console.log(c);
// let student = [
//     { name: "Ali", marks: 85 },
//     { name: "Ahmad", marks: 45 },
//     { name: "Noor", marks: 75 },
//     { name: "Sara", marks: 95 },
//     { name: "Bilal", marks: 55 }
// ];

// let li=student.map((st)=>{
//     return st.name;
// })
// console.log(li);
// let pass=student.filter((st)=>{
//     return st.marks>=50;
// })
// console.log(pass);
// let to=student.reduce((total,st)=>{
//     return total+st.marks;
// },0);
// console.log(to);
// let f=student.find((st)=>{
//     return st.marks>=90;
// })
// console.log(f);
// let u=student.some((st)=>{
//     return st.marks<50
// })
// console.log(u);
// let e=student.every((st)=>{
//     return st.marks>=50;
// })
// console.log(e);

// Apna khud ka person object banao with kam se kam 4 properties (name, age, city, hobby).

// Dot notation se 2 properties console.log karo.
// Bracket notation se 2 properties console.log karo.
// Ek naya property add karo (dot notation se).
// Ek property update karo (bracket notation se).
// Ek property delete karo.

// Code likho aur mujhe bhejo — main check karunga.

let person = {
  name: "Shahbaz",
  age: 20,
  city: "Lahore",
  hobby:'coding'
};
console.log(person.name);
console.log(person.age);
console.log(person['city']);
console.log(person['hobby']);
person.color='white'
delete person.hobby;
person['city']='pindi'
console.log(person)

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};
function carDetails(car){
    return `this car is a ${car.year} ${car.brand} ${car.model}`
}
console.log(carDetails(car))

let student = {
  name: "Shahbaz",
  address: {
    city: "Lahore",
    country: "Pakistan"
  },
  skills: ["HTML", "CSS", "JavaScript"],
  grades: {
    math: 85,
    english: 90
  }
};

console.log(student)
console.log(student.grades.english)
student.skills.push('react','node','mern')
console.log(student.skills)
student.address.city='pindi'
console.log(student)


let taskManager = {
  title: "Smart Task Manager",
  developer: "Shahbaz",
  tech: ["HTML", "CSS", "JavaScript"],
  status: {
    isStarted: false,
    completedDays: 6
  }
};
console.log(taskManager.title)
console.log(taskManager.developer)
console.log(taskManager.tech[1])
taskManager.status.isStarted=true
console.log(taskManager.status.isStarted)
taskManager.tech.push('react')
console.log(taskManager.tech)
console.log(Object.keys(taskManager))
console.log(Object.values(taskManager))

let tasks = {
  pending: ["Buy groceries", "Call mom", "Fix bug"],
  completed: ["Learn variables", "Learn loops"]
};
let totalTask=Object.values(tasks).reduce((total,num)=>{
    return total+num.length;
},0)
console.log(totalTask)
tasks.pending.splice(1,1)
tasks.completed.push("Call mom")
console.log(tasks)
// console.log(Object.values(tasks))
// Sirf Object methods aur array methods use karke:
// 1. Total tasks count karo (pending + completed dono)
// 2. "Call mom" ko pending se nikal ke completed mein daalo
// 3. Final state console.log karo

// Hint: Object.values(), .push(), .splice() ya .filter() use kar sakte ho
let person = {
  name: "Shahbaz",age: 20,
};
// sirf keys ka array deta hai
console.log(Object.keys(person));
// key-value pairs ka array deta hai
console.log(Object.entries(person));