

function changeColor(){
    console.log('changed');
    let child = document.getElementById('one');
    child.style.backgroundColor = "cyan";
    // if(true){
    //     var a = 2;
    //     // let b = 3;
    //     // const c = 4;
    // }
    // console.log(a);
    if(true){
    var a = 2;
        // let b = 3;
        // const c = 4;
    }
    console.log(a);
}
console.log("varun");

function updateVal(Arith){
    let x = document.getElementById('counter_div');
    
    if(Arith=="increment"){
        x.innerText=parseInt(x.innerText) + 1 ;

    }
    else if(Arith=="decrement"){
        x.innerText=parseInt(x.innerText) - 1 ;

    }   
}

// function checkPerfectSquare(perfect){
//     let z= document.getElementById('check');
//     // console.log(typeof perfect.target.valueAsNumber);
//      let x=perfect.target.valueAsNumber;
//     // console.log(Math.sqrt(x))
//     if(x<0){
//     z.innerText=("not Perfect Square");}

//     else{
//         let sqrt=Math.sqrt(x);
//         let flr=Math.floor(sqrt);
//         if(sqrt-flr == 0)
//         z.innerText=("perfect square");
//         else 
//         z.innerText=("Not a Perfect Square");

//     }
// }

function isPerfectSquare(){
    let z = document.getElementById('check');
    let x = document.querySelector('input[type="number"]').valueAsNumber;
    console.log(x);
    if (x < 0) {
        z.innerText = "Not a Perfect Square";
        return;
    }
    let sqrt = Math.sqrt(x);
    let flr = Math.floor(sqrt);
    if (sqrt - flr == 0) {
        z.innerText = "Perfect Square";
    } else {
        z.innerText = "Not a Perfect Square";
    }
}

function validateInput(event){
    console.log("Demo");
    var x= event.target.valueAsNumber;
    if (x<=0){
        event.target.value=1;
    }
    else if(x>=51){
        event.target.value=50;
    }
}

// function printPrimetill(){
//   let x= document.getElementById("prime");
//   let val= x.value;
//   let disp=document.getElementById("check");
//   let result="";
//   let i=2;
//   let count=0;
//   //for(let i=2; i<=val;i++){
//     while(i<val) {

//     let flag=0;
//     for(let j=2; j<=Math.sqrt(i);j++){
//         if(i%j==0){
//             flag=1;
//             break;
//         }
//     }
//     if(flag==0){
//         console.log(i);
//         count++;
    
        
//     }
//     i++;
//   }
// result=result.substring(0,result.length -1);
// check.innerText=result;

// }

//first n prime numbers

function printPrime(){
  let x= document.getElementById("prime");
  let val= x.value;
  let disp=document.getElementById("check");
  let result="";
  let i=2;
  let count=0;

  while(count<val){

    let flag=0;
    for(let j=2; j<=Math.sqrt(i);j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        console.log(i);
        count++;
        result=result+i+",";
    }
        
    
    i++;
  }
result=result.substring(0,result.length -1);
check.innerText=result;

}





function doSomething(){
    let input = document.getElementById('text-field').value;
    var printHello = function(){
        input ='Hello '+input;
        return input;
    };
    doSomething2(printHello);
}

function doSomething2(callback){
    let output = callback();
    document.getElementById('output').innerText = output;
}


