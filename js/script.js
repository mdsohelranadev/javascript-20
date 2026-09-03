
let firstName = "sohel rana"
console.log(firstName);



let myNumber = 15
if (myNumber >= 20) {
    console.log("adult");
}
else {
    console.log("Child");
}



// result start
let results = 88
if (results > 100) {
    console.log("tum bohot chalak banda ho");
}

else if (results >= 0 && results < 33) {
    console.log(" Fail");
}

else if (results >= 33 && results < 40) {
    console.log(" grade ___ D");
}

else if (results >= 40 && results < 50) {
    console.log("grade ___ C");
}

else if (results >= 50 && results < 60) {
    console.log("grade ___ B");
}

else if (results >= 60 && results < 70) {
    console.log("grade ___ A-");
}

else if (results >= 70 && results < 80) {
    console.log("grade ___ A");
}

else if (results >= 80 && results < 101) {
    console.log("grade ___ A+");
}
else {
    console.log("tore jeno kono din aykhane na dekhi ");
}

// result end





// prompt start
// let userName = prompt("Please Enter your age")
// console.log(userName);


// if(userName>20){
//     console.log("Adult");
// }
// else{
//     console.log("Child");
// }

// prompt end







let gender = "Male"
let age = 25
let area = "Dinajpur"
let salary = 100000

if (gender == "Male") {

    if (age >= 25) {

        if (area == "Dinajpur") {

            if (salary == 100000) {
                console.log(" Congratulations your are  selected ");

            }
            else {
                console.log("your are not selected");
            }

        }
        else {
            console.log("location must be Dinajpur");
        }
    }
    else {
        console.log("25 + age must be");
    }
}

else {
    console.log(" must be Male candited");
}






let names = "sohel rana"
console.log(`my name is ${names}. `);

// 7 x 1 = 7

// for(let i = 1; i<11; i++){  
//     console.log(i);

// }

// let L = 17.5

// for(let O =1; O<11; O++){

//     console.log(`${L} x ${O} = ${L*O}`);

// }


let namta = 2

for (let m = 1; m < 11; m++) {
    console.log(`${namta} X ${m} = ${namta * m}`);
}


function mysohel(S) {
    console.log("my name is" + ' ' + S);
}
mysohel("sohel");



const language = ["html", "css", "javascript"]
language[3] = "next.js"
language[4] = "node.js"
language[5] = "laravel"


console.log(language);
// console.log(language[language.length-1]);

language.unshift('basic');
language.pop();
console.log("hello");
language.pop();
language.join('$')

const q = [2, 3, 4, 5];
const w = [2, 3, 4, 5];
const e = q.concat(w)
e[2] = "sohel"
console.log(e);
console.log(e[1]);

let ss = ['html', 'css', 'js', 'tailwind', 'boostrap']
console.log(ss);

ss.splice(2, 0, 'sohel');
ss.splice(1, 2,);
console.log(ss);


const tt = [
    [5, 3, 2],
    [3, 5, 8],
    [9, 8, 2]
]
console.log(tt);
// console.log(tt.flat);


const fruits = ['mango', 'apple', 'onion']

fruits.push("shoel");
fruits.shift();
fruits.unshift("ponapple")
fruits.join(' $ ');
fruits.pop();
console.log(fruits);
console.log(fruits.join(" $ "));




let rahim = [40, 50, 60];

let bonus = rahim.map(rahim => rahim + 5);

console.log(bonus);

let korim = [33, 38, 29, 59, 90]

let babu = korim.filter(korim => korim == 38)
console.log(babu);


let numbers = [50, 80, 89]
let total = numbers.reduce((ok, yes) => ok + yes, 0)
console.log(total);



document.getElementById('btn').onclick = function () {
    document.getElementById('btn').innerHTML = 'subcribed😊'
}


document.getElementById('btns').onclick = function () {
    document.getElementById('btns').innerHTML = 'hello bangladesh'
}

document.getElementById('clicks').onclick = function () {
    document.getElementById('clicks').innerHTML = "hello"
}


let us = {
    name: "shoel",
    age: 115,
}

console.log(us['age']);




let num1 = 15;
let num2 = 15;

console.log(Math.ceil(num1));

// console.log(Math.round(num1));
// console.log(Math.ceil(Math.random().toFixed(2)*10));



// let small = prompt('Enter your name')

// console.log(small);



function rolldice (){
    let lodunumber = Math.ceil(Math.random()*6)
    let source  ='images/'+lodunumber + '.png'
    document.getElementById('lodu').src= source; 
}



let sks = 15.4
console.log(Math.ceil(sks));



console.log(Math.max(20,38,28,80));


const na = 1400;
const dis = 58;
const finalprice = Math.floor(na*dis/100);
const fnp = Math.ceil(na-finalprice);
console.log(fnp);



let numb =14
for(let m = 1; m <11; m++){

    console.log(`${numb} X ${m} = ${numb *m}`);

}



