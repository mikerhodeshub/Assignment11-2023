//STEP 1
/* let word = 'superimposed';
function alphabetize(word){
    word = word.split('').sort().join('');
    console.log(word);
}
alphabetize(word); */
//STEP 2
/* let word = 'i fed my cat and he thanked me by throwing up on the carpet';
function capitalize(word){
    word = word.toLowerCase().split(' ').map((w) => w.charAt(0).toUpperCase() + w.substring(1)).join(' ');
    console.log(word);
}
capitalize(word); */
//STEP 3
/* let word = 'i fed my cat and he thanked me by throwing up on the carpet';
function getVowels(word) {
    var m = word.match(/[aeiou]/g);
    console.log(m.length);
}
getVowels(word); */
//STEP 4
/* function genRandomString(){
    let r = (Math.random() + 1).toString(36).substring(2);
    console.log(r);
};
genRandomString(); */
//STEP 5
/* let namearr = ["Australia", "Germany", "United States of America"];
function getLongestNameFromArray(namearr){
    let longestName = namearr[0];
    for(let i = 0; i < namearr.length; i++){
        if(namearr[i].length > longestName.length){
            longestName = namearr[i];
        }
    }
    console.log(longestName);
}
getLongestNameFromArray(namearr); */
