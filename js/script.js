
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
let area ="Dinajpur"
let salary = 100000

if(gender == "Male"){

    if(age >= 25){
      
        if( area =="Dinajpur"){

            if(salary == 100000){
                console.log(" Congratulations your are  selected ");

            }
            else{
                console.log("your are not selected");
            }

        }
        else{
            console.log("location must be Dinajpur");
        }
    }
    else{
        console.log("25 + age must be");
    }
}

else{
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

for(let m =1; m<11; m++){
console.log(`${namta} X ${m} = ${namta*m}`);
}

