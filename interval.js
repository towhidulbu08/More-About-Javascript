console.log(1);
console.log(2);
let num=0;
const intervalID=setInterval(()=>{
   
    console.log(++num);
    if(num==10){
        clearInterval(intervalID);
    }
},3000)
console.log(4);
console.log(5);