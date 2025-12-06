
// All Variables
// let brand = "Mercedes";
// const model = "C-Class";
// var year = 2021;
// console.log(brand,model, year);





// function isEven that returns true/false
// function isEven( number ){
//     if(number % 2 === 0){
//        return true;
//     }
//     else{
//        return false;
//  }
// }
// console.log(isEven(4));



// array of 5 movies and print first & last
// let nolan = ["Tenet", "Interstellar", "Inception", "Dunkirk", "The Dark Knight"];
// console.log(nolan[0],nolan[nolan.length-1]);
// nolan.push("Memento");
// nolan.pop();
// nolan.splice(2,1);
// nolan.shift();   
// nolan.unshift("Following");
// nolan.includes("Dunkirk");
// for(let i = 0; i < nolan.length; i++){
//     console.log(nolan[i]);
// }







// object car with model, year, and price
// const car={
//     "brand": "Mercedes",
//     "model ": "C-Class",
//     "year": 2021,
//     "color":"White",
//     "price": 1000000,
// };
// car.terminally= "4MATIC";
// console.log(car);

// car.brand="BMW";
// car.model="X5";
// car.year=2022;
// car.color="Black";
// car.price=1500000;
// console.log(car);





// loop that prints numbers 1 to 50
// for (let i = 1; i < 50; i++){
//     console.log(i);
// }

// uppercase to lowercase
// let a = "Hasrhhhhhhhhhhhvhhvi";
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.replace("r","p"));
// console.log(a.replaceAll("h","k"));
// console.log(a.indexOf("v"));

// let nav = document.getElementById("h1")
// nav.addEventListener("click",() =>{
//    console.log("Clicked");
// });

// let nav = document.getElementById("h1")
// nav.addEventListener("click",() =>{
//    nav.textContent=("Unlock Technologies");
// });

// let input = document.getElementById("username");
//    input.addEventListener("input", () =>{
//       console.log("Your Typed", input.value) 
        
// });


const dropdown = document.getElementById("menu");

dropdown.addEventListener("click", () =>{

})






// Not Working
   

// const parent = document.getElementById(intro)    

// parent.addEventListener("click", ()=> {
//     console.log("Click Parent");
// }

// );

// const child = document.getElementById(intro)

// child.addEventListener("click", ()=> {
//     console.log("Click Parent");
// }

// );
   


// form.addEventListener("submit", (event) =>{
//     event.preventdefult();
//     console.log("form stooped - while validation ")
// })




// const form= document.getElementById("form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const user = document.getElementById("username").value.trim();
//     const pass = document.getElementById("password").value.trim();

//     if ( !user || !pass){
//         alert("Enter Username and Password");
//         return;
//     }
//     if(pass.length < 8){
//         alert("Password must be 8 Digit or Longer");
//         return;
//     }

//     alert("login Successfull!");
// });



// const header= document.getElementById("header");

// header.addEventListener("onscroll", () =>{
//     if(header.scrollHeight < 1000 ){
//        header.innerHTML= <>Harshvhkm</>
//     }

// });


const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2"); 
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const multi = document.getElementById("multi");
const divide = document.getElementById("divide");
const res = document.getElementById("result");



add.addEventListener("click", () =>{
    const a = n1.value.trim();
    const b = n2.value.trim();
    if(!a || !b){
        alert("Please Fill Both Number");
        return;
    }

    const add = Number(a)+ Number(b );
    res.textContent = "Result: " + add;
});



 sub.addEventListener("click", () =>{
    const a = n1.value.trim();
    const b = n2.value.trim();
    if(!a || !b){
        alert("Please Fill Both Number");
        return;
    }
    const sub = Number(a) - Number(b);
    res.textContent = "Result: " + sub;
});


 multi.addEventListener("click", () =>{
    const a = n1.value.trim();
    const b = n2.value.trim();
    if(!a || !b){
        alert("Please Fill Both Number");
        return;
    }
    const multi = Number(a) * Number(b);
    res.textContent = "Result: " + multi;
});


 divide.addEventListener("click", () =>{
    const a = n1.value.trim();
    const b = n2.value.trim();
    if(!a || !b){
        alert("Please Fill Both Number");
        return;
    }
    const divide = Number(a) /  Number(b);
    res.textContent = "Result: " + divide;
});
    
  









  