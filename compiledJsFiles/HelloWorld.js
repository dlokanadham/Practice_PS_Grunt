var Hellow = (function () {
    function Hellow(greeting) {
        this.greeting = greeting;
    }
    Hellow.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Hellow;
})();

var hellow = new Hellow("Hello, world!");
document.body.innerHTML = hellow.greet();
