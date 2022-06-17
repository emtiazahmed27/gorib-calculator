//variables and Constants
const fNum=document.querySelector(".f-number");
const lNum=document.querySelector(".l-number");
const button=document.querySelectorAll(".button");
const result=document.querySelector(".show-result");
const reset=document.querySelector(".reset");
const form=document.querySelector(".form-contianer");
const modal=document.querySelector(".modal-container");
const diviOutput1=document.querySelector(".div-p-1");
const diviOutput2=document.querySelector(".div-p-2");
const closeModal=document.querySelector(".close");


let x; 
let y;
let res= Number;
let res2=Number;

//Calculator
for(let i=0; i<button.length; i++){
    button[i].addEventListener("click",()=>{
    x=parseInt(fNum.value);
    y=parseInt(lNum.value);

    if(isNaN(x) || isNaN(y) || x>Number.MAX_SAFE_INTEGER||y>Number.MAX_SAFE_INTEGER ||x<Number.MIN_SAFE_INTEGER||y<Number.MIN_SAFE_INTEGER ){
        result.style.color="red";
        result.innerText=" Input field can't be empty! or Safe Integer Error";
    }
    else{   
        if(i==0){
            res=add();
            result.style.color="black";
            result.innerText=" "+res;
        }
        else if(i==1){
            res=minus();
            result.style.color="black";
            result.innerText=" "+res;
        }
        else if(i==2){
            res=mul();
            result.style.color="black";
            result.innerText=" "+res;
        }
        else if(i==3){
            res=div();
            result.style.color="black";
            result.innerText=" "+res;
        }
        else if(i==4){
            res=percent();
            result.style.color="black";
            result.innerText=" "+res;
        }
        else if(i==5){
            res=gcd(); 
            result.style.color="black";
            result.innerText=" "+res;
        }
        else if(i==6){
            res=lcm();
            result.style.color="black";
            result.innerText=" "+res;
        }
        else if(i==7){
            res=isPrime(x);
            res2=isPrime(y);
            result.style.color="black";
            result.innerText=" "+res+" "+res2;
        }
        else{
            res=getDivisors(x);
            res2=getDivisors(y);
            diviOutput2.innerText="";
            diviOutput1.innerText="";

            for(let j=0; j<res.length; j++){
                diviOutput1.innerText+=" "+res[j];  
            }
            for(let j=0; j<res2.length; j++){
                diviOutput2.innerText+=" "+res2[j];
            }
            modal.classList.replace("hide","show");
        }     
    }
})}

//Reset Function
reset.addEventListener("click",()=>{
    window.location.reload();
})

// close
closeModal.addEventListener("click",()=>{
    modal.classList.replace("show","hide");
})


//Functions for calculator
function add(){
    let sum=0;
    sum+=x+y;
    return sum;
}

function minus(){
    let sub=0;
    sub=x-y;
    console.log(sub);
    return sub;
}

function mul(){
    let mult=1;
    mult=x*y;
    return mult;
}

function div(){
    let divi=1;
    divi=x/y;
    return divi;
}

function gcd() {
    a = Math.abs(x);
    b = Math.abs(y);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}  

function lcm(){
    let m=mul();
    let lcm=m/gcd();
    return lcm;
}

function isPrime(a) {
    var sqrtnum=Math.floor(Math.sqrt(x));
    var prime = a >= 2;
    for(var i=2; i<sqrtnum+1; i++) {
        if(a % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

function percent(){
    let percent=1;
    percent=(x/y)*100;
    return percent;
}

function getDivisors(a){
    let mod = a;
    let arr=[];
    while (mod > 0){
      if(a % mod === 0){
        arr.push(mod);
      }
      mod--;
    }
    return arr;
}


