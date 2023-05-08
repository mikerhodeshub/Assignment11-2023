//STEP 1
/* let num = prompt('Enter a number');
console.log(Math.abs(num)); */
//STEP 2
/* let num = prompt('Enter a decimal');
alert(Math.ceil(num)); */
//STEP 3
/* let num = prompt('Enter a decimal');
alert(Math.floor(num)); */
//STEP 4
//this seems way more complex than the rest of the questions, am I not understanding a simpler way to do this?
//this got weird because '100' > '40' for example, evaluates to false, which got me into evaluating ascii values...
//In order to convert an array of strings to an array of numbers I had to go back to .map...really feel like I'm missing the point of this exercise
/* let nums = prompt('enter a series of 5 numbers separatred by commas');
let numbers = nums.split(",").map(Number);
let highnum = numbers[0];
let lownum = numbers[0];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > highnum){
        highnum = numbers[i];
    }
    if(numbers[i] < lownum){
        lownum = numbers[i];
    }
}
console.log(highnum)
console.log(lownum); */
//STEP 5
/* let num = prompt('Enter a number');
alert(Math.sqrt(num)); */