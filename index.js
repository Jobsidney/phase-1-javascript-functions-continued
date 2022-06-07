// code your solution here

//assignment

function saturdayFun(){
    return `This Saturday, I want to roller-skate!`;
}
saturdayFun();

function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;

}
saturdayFun('bath my dog');

function mondayWork(){
    return "This Monday, I will go to the office.";
}
function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`;

}
function wrapAdjective(sighn){
    const output=[
        function () {
            let wrap1="a hard worker";
            return `You are ${sighn}${wrap1}${sighn}!`;
            
        },
        function () {
            let wrap2='a dedicated programmer';
            return `You are ${sighn}${wrap2}${sighn}!`;
            
        }
    ]
    return sighn==='*'?output[0]:output[1];

}
wrapAdjective('*')
console.log(wrapAdjective('*'));






// //self invoking functions practise
// (function () {
//     console.log("helo");
    
// })();//its also an anonymous function coz it has no name.

// const fn=function () {
//     console.log("Kairetu");    
// }
// fn();//you must use brackets for it to be called

// //immediately invoking function with parameter

// (function (basenum) {
//     console.log(basenum*2);
    
// })(2);
// //FUNCTIONAL LEVEL SCOPE
// //where a function is defined inside another function
// function outer(greeting, msg="its fine day") {
//     const innerFunc=function(name,lang="python"){
//         console.log(`${greeting}, ${name}! ${msg} ${lang}`);
//     }
//     return innerFunc;
    
// }
// outer('hey')('jovan','flutter');
// //with this dont use brackets on the other function when you assign data toit outside in main scope
// const stored=outer('Helloooo');
// stored('karma',"Dart");

// //function closure
// const array = (function (thingToAdd) {
//     const base = 3;
//     return [
//       function () {
//         return base + thingToAdd;
//       },
//       function () {
//         return base;
//       },
//     ];
//   })(2);

//   //to access second functon output:
//   console.log(array[1]());
//   //we call it using index and add () to show we are calling that fucntion

//   //SCOPE CHAIN
//   //SAME THING AS closure
//   function demoChain(name) {
//     const part1 = "hi";
//     return function () {
//       const part2 = "there";
//       return function () {
//         console.log(`${part1.toUpperCase()} ${part2} ${name}`);
//       };
//     };
//   }
  
//   demoChain("Dr. Stephen Strange")()();
