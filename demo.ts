class Hello{
    firstName:string;
    lastName:string;
    sayHello = function(){
        return "Hello" + this.firstName + " "+ this.lastName;
    }
}




function sayHello(firstName:string,lastName:string):string{
    var message:string="Hello";
    message += firstName+ " " +lastName;

   return message;
}

console.log(sayHello('lina','mishra'));


var hellotemp: Hello=new Hello();
hellotemp.firstName="guru";
hellotemp.lastName="datta";
alert(hellotemp.sayHello());
