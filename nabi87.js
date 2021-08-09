class ticket {
    constructor(number,price ,type) {
        this.number = number ;
        this.price = price ;
        this.type = type;
    }
    get getnumber() {
        return this.number;
    }
    get getprice() {
        return this.price;
    }
    get gettype() {
        return this.type;
    }
    set Setnumber(n) {
        var str = /^[0-9]{8}$/;
        if(str.test(n)==true){
        this.number = n;
        
        }
        else{
            this.number=null;
            

        }
    }
    set Setprice(y) {
       if(y>200)
       {
          
           this.price=y;
       }
       else{
           this.price=null;
           
       }
    }
    set Settype(type) {
        
        this.type=type;
        
    }
    toString() {
        return "the Number  of the tikcet is: " + this.number + " the price is: " + this.price + " the type of the ticket is: " + this.type;
    }
}

