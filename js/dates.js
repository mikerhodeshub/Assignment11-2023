//STEP 1
/* let date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
console.log(date); */
//STEP 2
/* let date = new Date();
let month = date.toLocaleString('default', { month: 'long' });
console.log(month); */
//STEP 3
/* let date = new Date();
let day = date.getDay();
if(day === 0 || day === 6){
    console.log('weekend!');
} */
//STEP 4
/* let today = new Date();
today.setDate(today.getDate() - 1);
let yesterday = today.toLocaleDateString('en-US', { weekday: 'long' });
console.log(yesterday); */
//STEP 5
/* let today = new Date();
today = today.toLocaleDateString('en-US', {weekday: 'long'});
console.log(today.charAt(0)); */