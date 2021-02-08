class Rules{
    minbal =500;
    bankrules(){
        console.log("hello")
    }
}

class BankCustomer extends Rules{
    constructor(id,name,mobile){
        super();
        this.id=id;
        this.name=name;
        this.mobile=mobile;
        

    }
    getInfo(){
        console.log("getinfo is given");
    }
}

let c=new BankCustomer(101,"abc",8949404)
console.log(c);
//c.getInfo();
//console.log(c.minbal);

let d=new BankCustomer(121,'wew',2322123);
console.log(d);