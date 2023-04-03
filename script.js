function changeColor(){
    console.log('changed');
    let child = document.getElementById('one');
    child.style.backgroundColor = "cyan";
    if(true){
        var a = 2;
        // let b = 3;
        // const c = 4;
    }
    console.log(a);
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
