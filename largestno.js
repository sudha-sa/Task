//2nd largest no

// const input = [1,2, -2, 11, 7, 1]
// const output = 7

// const input1 = [1,4, 7, 2, 4, 7]
// const output1 = 4


// function secondlargest(input){
//   let arr = [...new Set(input)].sort((a,b)=>a-b)
//   return arr[arr.length-2]
// }

// console.log (secondlargest(input))
// console.log (secondlargest(input1))

// or
// function secondlargest(input){
//     let arr = input.sort((a,b)=>a-b)
//     let res = arr[arr.length-1]
    
//     for(let i=arr.length-2;i>=0;i--){
//     if(res!==input[i]){
//         res = input[i];
//         break;
//     }
//   }
//   return res
//   }
//   console.log (secondlargest(input))
//   console.log (secondlargest(input1))



// rorate function
  const input = [2,7,11,4,-2]
  const output = [11,4,-2,2,7]


  function rotateArray(){
 for(let i=0;i<2;i++){
    let temp = input[0];
    for(let i=0;i<input.length-1;i++){
        input[i]= input[i+1];
        }
        input[input.length-1]=temp;
 }
 console.log(input)
  }
  console.log(rotateArray(input))