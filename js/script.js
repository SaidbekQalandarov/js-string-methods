// let arr = [1, 9,2, 2, 3, 4, 1, 4, 7, 9]
// for(let i = 0; i < arr.length; i++){
//     for(let num = i + 1; num < arr.length; num++){
//         if(arr[i] === arr[num]){
//         console.log(arr[i]);
//     }
//  }
// }
// let age = prompt("yoshingizni kiriting")
// //for(let i = 1; i < 127; i++){
//   if(age <= 127 && 1 <= age){
//     console.log("yaxshi")
//   }
//     else{
//       prompt("qaytadan")
//  // }
// }

//----------------------------------------------------------------------------------------------------------------------------------

//Homework

// let arr = [1, 4, 5, 10, 23, 34, 54]
// let newarr = 0
// for(let i = 0; i < arr.length; i++){
//       newarr += arr[i]
//     }
//     console.log(newarr)
    

// let arr1 = [1, 4, -5, -10, 23, 34, 54]
// let newarr1 = 0
// let newarr2 = []
// for(let i = 0; i < arr1.length; i++){
//         if(arr1[i] < 0){
//             newarr2.push(arr1[i])
//         }
//         }
// for(let i = 0; i < newarr2.length; i++){
//     newarr1 += newarr2[i]
// }
// console.log(newarr1 * (-1))


// let arr2 = [ 1, 2, 3, 4, 4, 5, 6, 7, 7, -5, -5]
// for(let i = 0; i < arr2.length; i++){
//     if(arr2[i] === arr2[i + 1]){
//         console.log(arr2[i])
//     }
// }


// function calc(x, y, operator){
//     if(operator === "-"){
//         console.log(x - y)
//     }
//     else if(operator === "+"){
//         console.log(x + y)
//     }
//     else if(operator === "*"){
//         console.log(x * y)
//     }
//     else if(operator === "/"){
//         console.log(x / y)
//     }
//     else if(operator === "**"){
//         console.log(x ** y)
//     }
//     else if(y === 0 || operator === "/"){
//         console.log("noto'g'ri")
//     }
// }
// calc(5,6,"+")
// calc(12,10,"*")
// calc(30,6,"/")
// calc(5,2,"-")
// calc(5,6,"**")
// calc(5,0,"/")

//----------------------------------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function calcAverage(number){
//     return number.length / 2
// }
// console.log(calcAverage(arr))


// function countVowels(str){
//     let ob = []
//     let eb = []
//     let oob = []
//     let ab = []
//     let ub = []
//     let ib = []
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === "o" || str[i] === "O"){
//             ob += str[i]
//         }
//         if(str[i] === "e" || str[i] === "E"){
//             eb += str[i]
//         }
//         if(str[i] === "o'" || str[i] === "O'"){
//             oob += str[i]
//         }
//         if(str[i] === "a" || str[i] === "A"){
//             ab += str[i]
//         }
//         if(str[i] === "u" || str[i] === "U"){
//             ub += str[i]
//         }
//         if(str[i] === "i" || str[i] === "I"){
//             ib += str[i]
//         }
//     }
//     console.log("o: "+ob.length)
//     console.log("e: "+eb.length)
//     console.log("o': "+oob.length)
//     console.log("a: "+ab.length)
//     console.log("u: "+ub.length)
//     console.log("i: "+ib.length)
// }
// countVowels("openeeeeiIo' web")


// function isPalendrom(string){
//     let str = 0
//     let str2 = string.length - 1
//     while(str < str2){
//         if(string[str] !== string[str2]){
//             return false 
//         }
//         else{
//             return true
//         }
//     }
// }
// console.log(isPalendrom("abba"))

//----------------------------------------------------------------------------------------------------------

// function uCfirst(name){
//     return name[0].toUpperCase()
// }
// console.log(uCfirst("abcdf"))

// function maxlength(str, lengt){
//     for(let i= 0; i < str.length; i++){
//         if(str[i] === lengt){

//         }
//     }
// }
// maxlength('Hello world', 4)
//----------------------------------------------------------------------------------------------------------


// function floor(num){
//   let arr = num.toString().split(",")
//   let number = arr.slice(0, 1) * 1
//   if(num > 0){
//     return number
//   }
//   else{
//     return number - 1
//   }
// }
// console.log(floor(-53,636));

// function ceil(num){
//   let arr = num.toString().split(",")
//   let number = arr.slice(0, 1) * 1
//   if(num > 0){
//     return number + 1
//   }
//   else{
//     return number
//   }
// }
// console.log(ceil(6,2));

// function round(x){
//     return x.toFixed(0)
// }
// console.log(round(12.4));

// function trunc(num){
//   return num.toString()
// }
// console.log(trunc(-67,234));

// function pow(x, y){
//     return x ** y
// }
// console.log(pow(12, 10));

// function abs(num){
//     if(num < 0){
//         return num * (-1)
//     }
//     else{
//         return num
//     }
// }
// console.log(abs(-12));

// function sqrt(x){
//     if(x >= 0){
//         return x ** (1/2)
//     }else{
//     return "noto'g'ri"
// }
// }
// console.log(sqrt(10));
//----------------------------------------------------------------------------------------------------------

// function repeat(str, num){
//     for(x = 0; x < num; x++){
//         console.log(str)
//     }
// }
// repeat("open web", 5);

// function startWith(str, str2){
//     if(str[0] === str2){
//     return true
//     }else{
//         return false
//     }
// }
// console.log(startWith("open web", "b"));

// function endtWith(str, str2){
//     let num = []
//     num = str.split("").reverse()
//         if(num[0] === str2){
//         return true
//         }else{
//             return false
//         }
//     }
// console.log(endtWith("open web", "b"));


// function includes(str, from){
//     let arr = str.split("")
//     let boolen = false
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === from){
//             boolen = true
//         }
//     }
//     return boolen
// }
// console.log(includes("opend web", 'd'));


// function indexOf(str, from) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === from) {
//         return i;
//       }
//     }
//     return -1;
//   }
// console.log(indexOf("opend web", "d"));



