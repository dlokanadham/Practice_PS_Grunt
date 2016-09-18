class Hellow {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var hellow = new Hellow("Hello, world!");
    
document.body.innerHTML = hellow.greet();