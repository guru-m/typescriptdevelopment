var Hello = /** @class */ (function () {
    function Hello() {
        this.sayHello = function () {
            return "Hello" + this.firstName + " " + this.lastName;
        };
    }
    return Hello;
}());
function sayHello(firstName, lastName) {
    var message = "Hello";
    message += firstName + " " + lastName;
    return message;
}
console.log(sayHello('lina', 'mishra'));
var hellotemp = new Hello();
hellotemp.firstName = "guru";
hellotemp.lastName = "datta";
alert(hellotemp.sayHello());
