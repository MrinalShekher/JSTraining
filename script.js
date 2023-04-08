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
}
console.log("varun");
// function increment(){
//     // console.log('Increased by 1');
//     let x = document.getElementById('counter_div');
//     //  console.log(x);
//     // let val=x.innerText;
//     // val++;
//     // x.innerText=val;
//     // console.log(x.innerText);

//     //x.innerText= ++x.innerText; 
//     x.innerText=parseInt(x.innerText) + 1 ;
// }
// function increment(){
//     // console.log('Increased by 1');
//     let x = document.getElementById('counter_div');
//     //  console.log(x);
//     // let val=x.innerText;
//     // val++;
//     // x.innerText=val;
//     // console.log(x.innerText);

//     //x.innerText= ++x.innerText; 
//     x.innerText=parseInt(x.innerText) + 1 ;
// }

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