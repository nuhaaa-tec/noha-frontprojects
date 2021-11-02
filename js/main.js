var x=new Date(); 
var days =["sunday","monday","tuesday","wednesday","thursday","friday","saterday"]; 
console.log(days[x.getDay()]);  
console.log("Today is :"+ days[x.getDay()]);
 console.log("current time is:" +x.getHours()+"pm"+":"+x.getMinutes()+":"+x.getSeconds());

//2
console.log(Math.sqrt(100)); 
var degree=55; 
if(degree<50){
    console.log("sucess")
    } else{
        console.log("fail");
    }
function square(y){
    return "the area is"+y**2+"cm";}

console.log(square(10)); 
//4 
var degrees=[55,77,15,54]; 
var sum=degrees[0]+degrees[1]+degrees[2]+degrees[3];
console.log(sum); 
if(sum>50){
    console.log("fail");
}  

else if(sum>65 && sum<75) {
    console.log("succeed");
} 
else if(sum>75 && sum>85){
console.log("succeed");
} 
else{
    console.log("excellent");
}
///9 
function max(x,y){
    if(x%1==0 && y%1==1){
        console.log(Math.max(x,y));
    } else{
        console.log("not found")
    }
}
//00 
function randomNumber(min,max){
    return (Math.random()*(max-min));
}
console.log(Math.floor(randomNumber(0,10)));