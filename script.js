// // let heading = document.getElementById('heading');

// // // innerHTML — HTML bhi likh sakte ho andar
// // heading.innerHTML = "Mera <strong>Naya</strong> Heading";

// // // textContent — sirf plain text, HTML tags ignore hote hain
// // heading.textContent = "Simple Text Heading";

// // // Difference:
// // heading.innerHTML = "<em>Italic</em> text";  // italic dikhega
// // heading.textContent = "<em>Italic</em> "; // literally yeh text dikhega
// // let box = document.getElementById('box');

// // // Class add karo
// // box.classList.add('highlight');

// // // Class remove karo
// // box.classList.remove('highlight');

// // // toggle — agar hai to hatao, nahi hai to lagao
// // box.classList.toggle('highlight');

// // // Check karo ke class lagi hai ya nahi
// // console.log(box.classList.contains('highlight')); // true / false


// // 1. ID se select (single element)


// // 2. Class se select (multiple elements — array jaisa)
// let descs = document.getElementsByClassName("desc");
// console.log(descs);  // HTMLCollection(2) [p.desc, p.desc]

// // 3. Tag se select (multiple elements)

// // 4. CSS Selector se (sirf pehla match)
// let firstPara = document.querySelector(".desc");
// console.log(firstPara);  // <p class="desc">This is a paragraph</p>

// // 5. CSS Selector se (sab matches)
// let allParas = document.querySelectorAll(".desc");
// console.log(allParas);  // NodeList(2) [p.desc, p.desc]
// let title = document.getElementById("title");
// title.innerHTML='hello  girl';
// title.style.color='pink';
// let list=document.createElement('ul');
// list.innerHTML='<li>item1</li> <li>item2</li> <li>item3</li> ';
// document.body.appendChild(list);

// // let button = document.getElementsByTagName("button");
// // button[0].addEventListener("click",function(){
// //     alert('button Clicked')
// // })
// let btn=document.getElementById('bn');
// btn.addEventListener('click',function(){
//     alert('Hello baby')
// })

// let head=document.getElementById('heading');
// console.log(head);
// let select=document.querySelectorAll('.text');
// console.log(select);
// let first=document.querySelector('.text');
// console.log(first);
// let all=document.querySelectorAll('.text');
// console.log(all);
// let change=document.getElementById('changeBtn');
// change.addEventListener('click',function(){
//     head.textContent='Hello Dom!';
// })
// let add=document.getElementById('addBtn');
// add.addEventListener('click',function(){
//     let newPara=document.createElement('p');
//     newPara.textContent='this is first new paragraph';
//     document.body.appendChild(newPara);
// })
// let count=document.getElementById('counter');
// let increment=document.getElementById('increment');
// increment.addEventListener('click',function(){
//     count.textContent=parseInt(count.textContent)+1;
// })
// let decrement=document.getElementById('decrement');
// decrement.addEventListener('click',function(){
//     count.textContent=parseInt(count.textContent)-1;
// })
// let reset=document.getElementById('reset');
// reset.addEventListener('click',function(){
//     count.textContent=0;
// })



// // Class add karo
// box.classList.add('highlight');

// // Class remove karo
// box.classList.remove('highlight');

// // toggle — agar hai to hatao, nahi hai to lagao
// box.classList.toggle('highlight');

// // Check karo ke class lagi hai ya nahi
// console.log(box.classList.contains('highlight')); // true / false

// let head=document.getElementById('heading');
// head.textContent='Shahbaz ka Task Manager';
// let first=document.querySelector('.message');
// first.textContent="DOM seekh liya!";
// box.classList.add('highlight');
// let all=document.querySelectorAll('.message');
// console.log(all);
// function updatePage(newHeading, newColor) {
//     let headingEl=document.getElementById('heading');
//     headingEl.textContent=newHeading;
//    box.style.backgroundColor=newColor;
//    box.classList.toggle('highlight');
// }
// updatePage("Smart Task Manager", "lightgreen");

// let btn=document.getElementById('myBtn');
// btn.addEventListener('click',function(){
//     let head=document.getElementById('heading');
//     head.textContent="Button click hua!"
// })
// let box = document.getElementById('box');
// box.addEventListener('mouseover',function(){
//     box.style.backgroundColor='coral';
// })
// box.addEventListener('mouseout',function(){
//     box.style.backgroundColor='lightblue';
// })
// btn.addEventListener('click',function(){
//     box.classList.toggle('highlight');
// }) 
// let counter=0;
// let button=document.getElementById('myBtn');
// let count=document.getElementById('counter');
// button.addEventListener('click',function(){
//     if(counter<=4){
//         counter++;
//         count.textContent=counter;
//     }else{
//         let head=document.getElementById('heading');
//         head.textContent='limit reached!';
//     }
// })

// let box = document.getElementById('box');

// box.addEventListener('click', function() {
//     box.style.backgroundColor='purple';
//     box.classList.toggle('highlight');
// });
// let count=document.getElementById('btn');
// count.addEventListener('click',function(){
//     count.textContent=parseInt(count.textContent)+1;
//     count.textContent=parseInt(count.textContent)=5;
//     let head=document.getElementById('heading');
//     head.textContent='limit reached!';
// })

// Ek counter banao:
// - Page pe ek <h2 id="counter">0</h2> add karo HTML mein
// - Har baar button click pe counter 1 se badhe
// - Counter 5 tak pahunche to heading ka text "Limit reached!" ho jaye

// Hint: Counter value store karne ke liye variable chahiye function ke bahar

// let tasks = ['Buy milk', 'Learn JS', 'Sleep early'];

// // ❌ Galat — array seedha save nahi hoga
// // localStorage.setItem('tasks', tasks);
// // sirf "Buy milk,Learn JS,Sleep early" store hoga — array nahi!

// // ✅ Sahi — pehle string banao (JSON.stringify)
// localStorage.setItem('tasks', JSON.stringify(tasks));

// // ✅ Sahi — wapas array banao (JSON.parse)
// let savedTasks = JSON.parse(localStorage.getItem('tasks'));

// console.log(savedTasks); // ['Buy milk', 'Learn JS', 'Sleep early'] ✅
// localStorage.removeItem('tasks');
// localStorage.clear();


localStorage.setItem('username','shazi');

console.log(localStorage.getItem('username'));
let myTasks = ['Learn DOM', 'Build project', 'Practice JS'];
localStorage.setItem('myTasks',JSON.stringify(myTasks));
let read=JSON.parse(localStorage.getItem('myTasks'));
console.log(read[0]);
// 1. Apna naam Local Storage mein save karo — key: 'username'
// 2. Use getItem se read karo aur console.log karo
// 3. Yeh array save karo Local Storage mein — key: 'tasks'

// JSON.stringify use karna mat bhoolo!

// 4. Wapas read karo — JSON.parse use karo
// 5. Array ka pehla item console.log karo
