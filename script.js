/*let Yigit={
    name:'Yigit',
    yearofbirth: 2000,
    job:'student'


}
console.log(Yigit);*/
// function Person(name,yearofbirth,job){
//     this.name=name;
//     this.yearofbirth=yearofbirth;
//     this.job=job;
//    this.CalculateAge= function(){
//        return 2020-this.yearofbirth;
//    }
// }
// let Yigit = new Person('Yigit',2000,'student');
// let elmir =new Person('Elmir',2001,'Student');
// console.log(Yigit.CalculateAge());
/*************************** */
//Prototype
// let Person=function(name,Yearofbirth,Job){
// this.name=name;
// this.Yearofbirth=Yearofbirth;
// this.Job=Job;

// }
// Person.prototype.CalculateAge= function(){
   
//         return 2020- this.Yearofbirth;
    
// }
// let emel= new Person('Anar',1989,'Teacher');
// console.log(emel);
// let elmir =new Person('Elmir',2001,'student');
// console.log(elmir.CalculateAge());
/*******************Constructor******************* */
// function Employe(name,salary,){
//     if(!(this instanceof Employe)){
//         return new Employe(name,salary);
//     }
//     this.name=name;
//     this.salary=salary;

// }
// Employe.prototype.calcualatesalary=function(){
//     var month= new Date().getMonth()+1;
//     var tax=0,total=0;
//     total=this.salary*month;
//     if(total>=20000){
//         tax=total*0.2;
//     }
//     else if(total>=20000 && total<=30000){
//         tax=total*0.25;
//     }
//     else{
//         tax=total*0.3;
//     }
//     return{
//         total:total,
//         paid:total-tax,

//     }
// }
// var emp1= new Employe('Elmir',2001);
// console.log(emp1);
// var emp2 = new Employe('Anar',1989);
// console.log(emp2);
// console.log(emp1.calcualatesalary());
/****************Create.Object******************* */
// let PersonProto={
//     calculateage:function(){
//         return 2020-this.yearOfBirth;
//     }
// }
// let yigit = Object.create(PersonProto);
// console.log(yigit);
// let person =function(name,yearofbirth,job){
//     this.name=name;
//     this.yearofbirth=yearofbirth;
//     this.job= job;
// }
// person.prototype.Calcualteage= function(){
//  return 2020-this.yearofbirth;
// }
// let Teacher =function(name,yearOfBirth,job,subject){
//     person.call(this,name,yearOfBirth,job);
//     this.subject=subject;
// }

// Teacher.prototype=Object.create(person.prototype);
// Teacher.prototype.constructor=Teacher;
// let emel =new Teacher('emel',1989,'techer','math');
// console.log(emel);
// var str1= "Elmir";
// var str2 = new String("Qasimzade");
// String.prototype.repeat = function(n){
//     return new Array(n+1).join(this);
// }
// console.log('sadik'.repeat(4));
// var num1 = 10;
// var num2 = new Number(10);
// var bol1= true;
// var bol2 = new Boolean(true);
// var Obj1={
// name:'Elmir'
// }
// var Obj2= new Object({
//  name:'Elmir'
// })
// var arr1 =['ada','cinar','elmir','vuqar'];
// var arr2 = new Array('ada','cinar','elmir','vuqar');
// Array.prototype.remove = function(member){
//     var index= this.indexOf(member);
//     if(index>-1){
//         this.splice(index,1);
//     }
//  return this;
// }
// console.log(arr1.remove('ada'));
//Person constructor
// function Person(name){
//  this.name =name;
// }
// Person.prototype.Introduce = function(){
// console.log('hello my name is'+this.name);
// }
// //Teacher constructor
// function Teacher (name,branch){
// Person.call(this.name);
// this.branch=branch;
// }
// Teacher.prototype =Object.create(Person.prototype);
// Teacher.prototype.constructor=Teacher;
// Teacher.prototype.Teacher=function(){
//     console.log('i teach'+  this.branch);
// }


// let p1 =new Person('cinar');
// p1.Introduce();
// let t1 = new Teacher('sadik','math');
// t1.Introduce();
// t1.Teacher();
