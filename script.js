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

function updateVal(Arith){
    let x = document.getElementById('counter_div');
    
    if(Arith=="increment"){
        x.innerText=parseInt(x.innerText) + 1 ;

    }
    else if(Arith=="decrement"){
        x.innerText=parseInt(x.innerText) - 1 ;

    }   
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


