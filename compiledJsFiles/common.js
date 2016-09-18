var Hellow = (function () {
    function Hellow(greeting) {
        this.greeting = greeting;
    }
    Hellow.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Hellow;
})();
;
var hellow = new Hellow("Hello, world!");
document.body.innerHTML = hellow.greet();
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
