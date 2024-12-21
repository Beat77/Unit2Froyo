

//console.log (froyo.flavors);

const userPick = prompt ("Enter your selected flavors");
//console.log(userPick);

// Check for data entered
//Use input to array the data entered
const array = userPick.split(",");
//console.log(array);

//Create froyo object, count flavors

const froyoObj ={};
// for(let i = 0; i<array.length; i++){

// }
// console.log(froyoObj['choco']);

for(const flavor of array){
    console.log(flavor);
    if(froyoObj[flavor]){
        froyoObj[flavor] += 1;
    } else{
        froyoObj[flavor] = 1;
    }
}
console.log(froyoObj)

// for(const flavor in array){
//     console.log(flavor)
// }


