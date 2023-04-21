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
    // let input = document.getElementById('text-field').value;
    // var printHello = function(){
    //     console.log(this);
    //     input ='Hello '+input;
    //     return input;
    // };
    // doSomething2(printHello);
    let student1 = makeStudentFactory('Mrinal',25);
    let student2 = makeStudentFactory('Varun',26);
    student1.speak('Hi');
    student2.speak('Hello');

    let student3 = new makeStudentConstructor('Modi Ji',25);
    student3.speak('Mitroo');
}

function doSomething2(callback){
    let output = callback();
    document.getElementById('output').innerText = output;
}

// let Student = {
//     name:'Mrinal',
//     age:26,
//     // speak: function(val){
//     //     console.log('uttered '+val);
//     // }
//     speak(val){
//         console.log('uttered '+val);
//     }
// }

//to build an object we have two stratergies
//1) factory function
//2) Constructor function

//factory function
// function makeStudentFactory(name,age){
//     let name = x;
//     let age = y;
//     speak = (val)=>{
//         console.log(name+' says '+val);
//     }
//     return{
//         name,
//         age,
//         speak
//     }
// }
//cleaner code
function makeStudentFactory(name,age){
    return{
        name,
        age,
        speak(val){
            console.log(name+' says '+val);
        }
    }
}

//Contructor Function uses the this property to assign values to an object
// the this reference will always point to the object on which your function was called (if it is not an arrow function);
function makeStudentConstructor(name,age){
    this.name = name;
    this.age = age;
    this.speak = (val)=>{
        console.log(name+' says '+val);
    }
}