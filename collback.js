///Callback Function
// let val;
// function MultipleByTwo(a,b,c,callback){
// let arr =[];
// for(let i=0;i<3;i++){
//     arr[i]= callback(arguments[i]*2);
// }
// return arr;
// }
// val =MultipleByTwo(5,10,20,AddOne);
// function AddOne(a){
//     return a+1;
// }
// console.log(val);
//Immediate function
// function Welcome(){
//   var days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
//   var today = new Date();
//   var msg = 'welcome today is ' + days[today.getDay()];
//   return msg;
// }
// console.log(Welcome());
//                    Funcsiondan funcsion caqirma
// function Question(hobby){
//     switch(hobby){
//         case 'car':
//             return function(name){
//                 console.log(name +' do you have a car?');
//             }

//         break;
//         case 'book':
//             return function(name){
//                 console.log(name +' what is your favorite book?');
//             }

//         break;
//         case 'software':
//             return function(name){
//                 console.log(name +' are you intersted in asp.net?');
//             }

//         break;
//         default: 
//          return function(name){
//             console.log(name +' have are you?');
//          }


//     }
// }
//  var carQuestin= Question('car');
//  carQuestin('Elmir');
/*>>>>>>>>>>>>>>>>>>>>>>Getter &Setters<<<<<<<<<<<<<<<<<<<<<*/
// const person = {
//     firstname: 'Elmir',
//     lastname: 'Qasimzade',
// }
// Object.defineProperty(person,'fullName',{
//     get function() {
//         return `${this.firstname} ${this.lastname}`
//     },
//     set function (value){
//         const parts = value.split(' ');
//         this.firstname =parts[0];
//         this.lastname =parts[1];
//     }
// })
// Object.defineProperty(person,'age',{
//  value: 50,
//  writable:true
// })
// person.age=45;
// person.Fullname= 'ELMIR qasimazade';
// console.log(person.Fullname);
// console.log(person);
/*>>>>>>>>>>>>>>>>>CALL & APPLY & BIND<<<<<<<<<*/
// var welcome = function(a,b) {
//     console.log('welcome '+ this.name +'.Are you intersted in '+a+ ' and '+b);
// }
// welcome();
// var yigit ={
//     name:'Yigit'
// };
// var ada ={
//     name:'Ada'
// };
// welcome.call(yigit,'asp.net','angulr');
// welcome.call(ada,'asp.net','angular');
// welcome.apply(yigit,['asp.net','angular']);
// welcomeYigit = welcome.bind(yigit);
// welcomeYigit('asp.net','c#');
// var num = {
//   min:0,
//   max:100,
//   checkNumericRange:function(value){
//   if(typeof value !== 'number'){
//       return false;
//   }else{
//       return value >= this.min && value<= this.max;
//   }

//   }

// }
// console.log(num.checkNumericRange(20));
// console.log(num.checkNumericRange(-20));
// var num1={min:50,max:60}
// console.log(num.checkNumericRange.call(num1,65));
// console.log(num.checkNumericRange.apply(num1,[52]));
// var CheckNumber = num.checkNumericRange.bind(num1);
// console.log(CheckNumber(56));
// try{
//     console.log(myFunction());
// }
// catch(e){
// console.log(e.message);
// }
document.getElementById('mybtn').addEventListener('click', function (e) {
    var name = document.getElementById('name');
    var name = document.getElementById('age');
    var name = document.getElementById('errors');
    try {
        if (name.value.length === 0) {
            throw new Error('name is reguired');
        }
    } catch (err) {
        errors.innerHTML = err;

    }
    finally{
        name.value='';
        arguments.value= '';
        
    }
    e.preventDefault();
})
