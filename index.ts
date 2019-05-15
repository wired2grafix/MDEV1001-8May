class Printer
{
    private printer : (str : string) => void;
    public constructor(func : (str : string) => void)
    {
        this.printer = func;
    }

    public print(str : string) : void 
    {
        this.printer(str);
    }
}

let printer = new Printer(console.log);

printer.print("hello world");