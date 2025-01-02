
// 1.kiritilgan raqamni kopaytmasini chqarish
// function squareNumber(num) {
//     return num * num;
// }

// console.log(squareNumber(7)); 

// 2.qon bosimni holatini bilish

// function BloodPressure() {
//   let systolic = 10;
//   let diastolic = 50;
//   if (systolic < 90 || diastolic < 60) {
//     console.log("Low blood pressure");
//   } else if (systolic >= 90 && systolic <= 120 && diastolic >= 60 && diastolic <= 80) {
//     console.log("Normal blood pressure");
//   } else if (systolic > 120 && systolic <= 140 || diastolic > 80 && diastolic <= 90) {
//     console.log("Pre-high blood pressure");
//   } else {
//     console.log("Invalid blood pressure");
//   }
//  }
// BloodPressure()


// 3. stringlarni qoshish
// function stringlarniQoshish(str1, str2) {
//     return str1 + str2;
// }

// console.log(stringlarniQoshish("Hello ", "World!")); 


// 4. Mashinalar ishlab chiqarilgan davlatini aniqlash
// function carsCountry(){
//     let car = `KIA`
//     if ( /hundai/i.test(car)  ||/kia/i.test(car)  ){
//         console.log(`made in Korea`)
//     }
//     else if (/hyundai/i.test(car)  ||/mazda/i.test(car)  ||/honda/i.test(car)  ){
//         console.log(`Made in Japan`)
//     }
//     else if ( /GM/i.test(car) || /ravon/i.test(car)){
//         console.log(`Made in Uzbekistan`)
//     }
//     else {
//         console.log(`invalid information`)
//     }
// }
// carsCountry()


// 5.pulni miqdoriga qarab telefon tanlash

// function moneyFitPhone() {
//     let money = 30; 

//     if (money < 100) {
//         console.log("Yana ozgina ishlang");
//     }
//     else if (money >= 100 && money <= 150) { // Money between 100 and 150
//         console.log("Samsung S21, Samsung A51, Huawei 123");
//     }
//     else if (money > 150 && money <= 350) { // Money between 150 and 350
//         console.log("iPhone X, iPhone 12 Pro");
//     }
//     else if (money > 350 && money <= 1100) { // Money between 350 and 1100
//         console.log("iPhone 13, iPhone 14");
//     }
//     else if (money > 1100 && money <= 1500) { // Money above 1100
//         console.log("iPhone 16 Pro Max");
//     }
//     else {
//         console.log("Error");
//     }
// }
// moneyFitPhone();


// 6.hafta kunlarini raqam orqali topish
// let dayNumber = 77; 
// let dayName;

// switch (dayNumber) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day number";
// }
// console.log("The day is:", dayName);


// 7.karra jadvali
// let number = 7;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }


//8. tepadan pasga sanash

// let count = 10;

// while (count >= 1) {
//     console.log(count);
//     count--;
// }

// 9. start stop buttons


// let option = "Start";

// switch (option) {
//     case "Start":
//         console.log("Starting the process...");
//         break;
//     case "Pause":
//         console.log("Pausing the process...");
//         break;
//     case "Stop":
//         console.log("Stopping the process...");
//         break;
//     case "Exit":
//         console.log("Exiting the system...");
//         break;
//     default:
//         console.log("Invalid option");
// }


//10.calculator

// let operation = "add"; 
// let num1 = 10, num2 = 5;
// let result;

// switch (operation) {
//     case "add":
//         result = num1 + num2;
//         break;
//     case "subtract":
//         result = num1 - num2;
//         break;
//     case "multiply":
//         result = num1 * num2;
//         break;
//     case "divide":
//         result = num1 / num2;
//         break;
//     default:
//         result = "Invalid operation";
// }

// console.log(`The result of ${operation} is: ${result}`);

// 11. oylar

// let monthNumber = 2; 
// let monthName;

// switch (monthNumber) {
//     case 1:
//         monthName = "January";
//         break;
//     case 2:
//         monthName = "February";
//         break;
//     case 3:
//         monthName = "March";
//         break;
//     case 4:
//         monthName = "April";
//         break;
//     case 5:
//         monthName = "May";
//         break;
//     case 6:
//         monthName = "June";
//         break;
//     case 7:
//         monthName = "July";
//         break;
//     case 8:
//         monthName = "August";
//         break;
//     case 9:
//         monthName = "September";
//         break;
//     case 10:
//         monthName = "October";
//         break;
//     case 11:
//         monthName = "November";
//         break;
//     case 12:
//         monthName = "December";
//         break;
//     default:
//         monthName = "Invalid month number";
// }
// console.log(monthName);

// 13. oylar orqali fasllarni topish

// let monthNumber = 9; 
// let season;

// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         season = "qish";
//         break;
//     case 3:
//     case 4:
//     case 5:
//         season = "baxor";
//         break;
//     case 6:
//     case 7:
//     case 8:
//         season = "yoz";
//         break;
//     case 9:
//     case 10:
//     case 11:
//         season = "kuz";
//         break;
//     default:
//         season = "Invalid month number";
// }

// console.log(`${monthNumber}-oy bu:${season}`);

// 14.menudagi ovqatlar narxi

// let foods = `lag'mon`;
// let cost ;
// switch (foods){
//     case "osh":
//     case `lag'mon`:
//         cost = "10.000 won"
//         break;
//     case "non":
//     case "choy":
//         cost = "4.000 won"
//         break;
//     default:
//         foods = `bunday ovqat menyuda yoq`  
//         cost = `no cost`  
// }
// console.log(`${foods} ${cost}`)

// 15. 
// let userRole = "admin"; 
// let accessLevel;

// switch (userRole) {
//     case "admin":
//         accessLevel = "Full access to all resources";
//         break;
//     case "editor":
//         accessLevel = "Access to edit content";
//         break;
//     case "viewer":
//         accessLevel = "View-only access";
//         break;
//     default:
//         accessLevel = "Unknown role";
// }

// console.log(`"${userRole}" has: ${accessLevel}`);

// 16.tolov tanlovlari

// let paymentMethod = "Toss"; 

// switch (paymentMethod) {
//     case "credit card":
//         console.log("Payment will be processed through your credit card.");
//         break;
//     case "Toss":
//         console.log("Redirecting to TOSS for payment.");
//         break;
//     case "bitcoin":
//         console.log("Payment will be processed through Bitcoin.");
//         break;
//     default:
//         console.log("Invalid payment method.");
// }


// 17.havoga qarab qanday kiyinishni recommend qilish

// let temperature = 4;
// let outfit;

// switch (true) {
//     case (temperature < 32):
//         outfit = "Wear a heavy winter jacket.";
//         break;
//     case (temperature >= 32 && temperature <= 50):
//         outfit = "Wear a light jacket.";
//         break;
//     case (temperature >= 51 && temperature <= 70):
//         outfit = "Wear a sweater.";
//         break;
//     default:
//         outfit = "Wear light clothing.";
// }

// console.log(outfit);

// 18.membershipleveliga qarab necha foiz discount olishnni koratadi

// let membershipLevel = ""; 
// let discount;

// switch (membershipLevel) {
//     case "Platinum":
//         discount = 20;
//         break;
//     case "Gold":
//         discount = 15;
//         break;
//     case "Silver":
//         discount = 10;
//         break;
//     default:
//         discount = 0;
// }

// console.log(`You have a ${discount}% discount.`);

// 19. havoga qarab ichimlik maslahat beradi

// let temperature = 10; 
// let drinkSuggestion;

// switch (true) {
//     case (temperature < 32):
//         drinkSuggestion = "Hot Chocolate";
//         break;
//     case (temperature >= 32 && temperature <= 50):
//         drinkSuggestion = "Coffee";
//         break;
//     case (temperature >= 51 && temperature <= 70):
//         drinkSuggestion = "Iced Tea";
//         break;
//     default:
//         drinkSuggestion = "Lemonade";
// }

// console.log(`Suggested drink: ${drinkSuggestion}`);


// 20. uchrashuv nomiga qarab vaqtini chiqarb beradi

// let eventType = "Lunch";
// let eventTime;

// switch (eventType) {
//     case "Meeting":
//         eventTime = "9:00 AM";
//         break;
//     case "Lunch":
//         eventTime = "12:00 PM";
//         break;
//     case "Workout":
//         eventTime = "6:00 PM";
//         break;
//     case "Dinner":
//         eventTime = "8:00 PM";
//         break;
//     default:
//         eventTime = "Invalid event type";
// }

// console.log(`Event: ${eventType} - Time: ${eventTime}`);

// 21.

// let age = 25;
// let ageGroup;

// switch (true) {
//     case (age <= 12):
//         ageGroup = "Child";
//         break;
//     case (age >= 13 && age <= 19):
//         ageGroup = "Teenager";
//         break;
//     case (age >= 20 && age <= 64):
//         ageGroup = "Adult";
//         break;
//     default:
//         ageGroup = "Senior";
// }

// console.log(`Age group: ${ageGroup}`);

//---------------------------------------------------------------------------------------

// 1.array yoki yoqligini aniqlash

// let arrayOrNot = function (something) {
//     if (toString.call (something) === "[object Array]") {
//         return true;
//     }
//         return false;
// };
// console.log(arrayOrNot("something"))
// console.log(arrayOrNot([2,5,6]));

// 2.maping orqali har bir songa nechadr raqam qoshish

// let numbers = [1, 2, 3, 4, 5];
// let data = numbers.map(num => num + 6);
// console.log(data);

// 3.map orqali sozlarni uppercase ga ozgartirish

// let words = ["hello","world"]
// let uppercasewords = words.map(word => word.toUpperCase())

// console.log(uppercasewords)

// 4.filter orqali sozlarni lengthga qarab tanlab olish

// let animals = ['cat','lion','dog','zebra']
// let shortwords = animals.filter((short) => short.length < 4)

// console.log(shortwords)

// 5.filter orqali 18 yoshdan kattan foydalanuvchilarni tanlash

// let users = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 25 },
//     { name: "David", age: 15 }
//   ];
//   let adults = users.filter(user=>user.age >= 18)
//   console.log(adults)

// 6.foreach orqali numberlarni kopaytirish

// let numbers= [1,2,3,4,5,6]
// let doubledNums = []

// numbers.forEach((num) => doubledNums.push(num*3))

// console.log(doubledNums)

// 7.find orqali arraylar ichidan kerakli malumotni topish

// let users = [
//     { username: "alice", age: 25 },
//     { username: "bob", age: 30 },
//     { username: "charlie", age: 35 }
//   ];
  
//   let user = users.find((user) => user.username === "bob");
  
//   console.log(user); 

// 8. find orqali 0 dan kichik bolgan raqamni topish


// let numbers = [3,-9, 8, -4];

// let firstMinus = numbers.find((num) => num < 0);

// console.log(firstMinus); 

  
// 9.reduce orqali sonlarni kopaytmasini topish

// let numbers = [1, 2, 3,];

// let data = numbers.reduce((num1, num2) => num1 * num2, +1 ) ; 

// console.log(data);

// 10.

//     let arr1 = [1,2,3]
//     let arr2 = [4,5,6]
//     let result = arr1.concat(arr2)

// concatArrays(result)

// 11 push orqali yangi elementlar qoshish

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon");

console.log(fruits)

  
