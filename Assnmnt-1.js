
    function BankAccount(accountNumber,name,type,balance)
{
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;

    this.Deposite = function(Amount)
    {
        this.balance += Amount;
    }

    this.Withddraw = function(Amount)
    {
        if(Amount <= this.balance)
        {
            this.balance -= Amount;
            console.log("Successfully Withdrawn -->",Amount);
        }
        else
        {
            console.log("Your Balance is inSufficient -->",this.balance);
        }
    }

    this.checkBalance = function()
    {
        console.log("Your Balance Sufficient -->",this.balance);
    }

   
}


var acnt1 = new BankAccount(21362172178,"Amzad Hussain","Saving-Account",1000);
var acnt2 = new BankAccount(78923476453,"Vicky","Saving-Account",3500);
var acnt3 = new BankAccount(89123782644,"Imran Ali","Saving-Account",3000);
var acnt4 = new BankAccount(40983218947,"Faiz","Saving-Account",2500);
var acnt5 = new BankAccount(10348732876,"Amir","Saving-Account",5000);

acnt1.Deposite(200);
console.log(acnt1);

acnt1.Withddraw(500);
console.log(acnt1);

acnt1.checkBalance();

acnt2.Deposite(400);
console.log(acnt2);

acnt2.Withddraw(100);
console.log(acnt2);

acnt2.checkBalance();

acnt3.Deposite(2500);
console.log(acnt3);

acnt3.Withddraw(300);
console.log(acnt3);

acnt3.checkBalance();

acnt4.Deposite(2000);
console.log(acnt4);

acnt4.Withddraw(1200);
console.log(acnt4);

acnt4.checkBalance();

acnt5.Deposite(900);
console.log(acnt5);

acnt5.Withddraw(1500);
console.log(acnt5);

acnt5.checkBalance();

var Accounts = [acnt1,acnt2,acnt3,acnt4,acnt5];

function checkBalance(Accounts)
{
    var Total = 0;

    for(var i=0; i<Accounts.length; i++)
    {
        Total += Accounts[i].balance;
    }

    console.log("Total Balance -->",Total);
}

checkBalance(Accounts);
