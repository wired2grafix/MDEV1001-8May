var Printer = /** @class */ (function () {
    function Printer(func) {
        this.printer = func;
    }
    Printer.prototype.print = function (str) {
        this.printer(str);
    };
    return Printer;
}());
var printer = new Printer(console.log);
printer.print("hello world");
