const input1 = {a:1, b:2, c:3, d:12, e:10}
const input2 = {a:2, d:12, e:10, f:14}

const output = {d:12, e:10}

function func(input1, input2){
    let obj = {};

    for(let i in input1){
        if(input1[i]==input2[i]){
            obj[i]=input1[i];
        }
    }
    return obj;
}
console.log(func(input1,input2))