// const numbers = [1, 2, 3, 4, 5, 6, 7];

// //foreach loop
// let sum1 = 0;
// numbers.forEach(num => sum1 += num);


// //reduce() method

// const sum2 = numbers.reduce((acc,val)=> acc + val,0)//recommended


// //eval() function
// const sum3 = eval(numbers.join("+"));//unsafe to use
// console.log(sum3);


//1
const input =[2,7,11,4,-2]
const output = [20,15,11,18,24]

let sum = input.reduce((a,b)=>a+b)

let totalsum = []

for (const value of input) {

totalsum.push(sum-value)
}
console.log(totalsum);

//2
const arr = [2,7,11,4,-2];

const sum1 = arr.reduce((a,b) => a+b);  
console.log( arr.map( i => sum1-i ));

//3
const input1=[2,5,6,9,4,-2];
const output1 = [22,19,18,15,20,26]

let output2=[];

for(var i=0;i<input1.length;i++){
  let out =input1.reduce((acc,val)=>val+acc)
  output2.push(out-input1[i]);
}
console.log(output2);

