"use strict";

//task 1

//let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let newArray = array.map(item => item / 3);
// console.log(newArray);

//task 2

// let languages = ["html", "css", "javascript", "python", "php"];
// let newArray = languages.filter((item) => item.length > 3);
// console.log(newArray);

//task 3

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let newWords = words.filter(item => item.includes('M') || item.includes('m'));

// console.log(newWords);

//Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

//task 4

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];
// let newArray = arr1.concat(arr2, arr3);
// console.log(newArray);

//task 5

// let arr = [-1, -2, -3, 4].some((item) => item > 0);
// console.log(arr);

//task 6
// let array =[23,45,32,5,87,7,3,98];
// let maxNumber = array.sort((x, y) => y - x)[array.length - 1];
// console.log(maxNumber);

//task 7

document.getElementById("firstdiv").classList.add("wrapper");

let imageElement = document.createElement("img");
imageElement.setAttribute("scr", "img/seashells-1337565_960_720.jpg");
imageElement.setAttribute("alt", "beachimage");

let hElelemt = document.createElement("h2");
hElelemt.setAttribute("class", "title");
hElelemt.textContent = "image title";

hElelemt.appendChild(imageElement);
// document.querySelector(".wrapper").appendChild(hElelemt);
document.getElementById("firstdiv").appendChild(hElelemt);

// შექმენით htmlში დივი, მიანიჭეთ id და ჯსდან ამ დივში დაამატეთ შემდეგი html სტრუქტურა:
// <div class=“wraper”>
//  <img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”>
// <h2> image title </h2>
// </div>
// H2 ჯს დან დაუმატეთ წითელი ფონტის ფერი და ფროტის ზომა 30px

//task 8

let pElement = document.createElement("p");
pElement.setAttribute("class", "text");
pElement.innerText = "Hello";

document.querySelectorAll(".test").appendChild(pElement);

// შექმენით სამი დივი htmlში, მიანიჭეთ ერთიდაიგივე კლასის სახელი და ყველა დივში დაამატეთ ჯს-დან შემდეგი კოდი:
// <p class=“text”> hello </p>

//task 9
// let array=[2,15,10,24];
// let newArray = array.splice(2, 1);
// console.log(array);
