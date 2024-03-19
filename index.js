// document.getElementById("Click me").addEventListener("click", function xyz() {
//     console.log("function worked");
// });

// function add(){
//     let count = 0;
//     document.getElementById("Click me").addEventListener("click", function xyz() {
//         console.log("function worked", ++count);
//     });
    
// }
// add()

redius = [3,2,4,5,8,3,4,8]
const area = function (redius){
    return Math.PI * redius * redius;
}

const diameter = function(redius){
    return 2 * redius
}

const calculate = function(redius, logic){
const output = []
for(i=0; i<redius.length; i++){
    output.push(logic(redius[i]));
    

}
return output;
};

// console.log(redius.map(area));

// console.log(calculate(redius, area)); 
// console.log(calculate(redius, diameter)); 

function DD(x){
return x*2
}

function PP(y){
    return y.toString(2)
}
const op = redius.map(DD)
const cp = redius.map(PP)


// console.log(op);
// console.log(cp);

const user = [
    {firstname: "Deepak", lastname: "Dash", age : 21},
    {firstname: "piyush", lastname: "shing", age :21},
    {firstname: "manaswini", lastname: "patra", age :22},
    {firstname: "bishal", lastname: "parida", age : 23},
]

const output = user.filter((x) => x.age<22).map((x) => x.firstname)


// const output = user.reduce(function (acc, curr){
//     if (acc[curr.age]){
//     acc[curr.age] = ++acc[curr.age]
// }
//     else{
//     acc[curr.age] = 1;
// }
//     return acc;
// }, {})

console.log(output);