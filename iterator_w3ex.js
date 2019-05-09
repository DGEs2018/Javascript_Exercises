// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, 
//and display a message to the screen. Go to the editor

function iterator0To15(num){
    let num = '';
    for(let i=0; i <=15; i++){
        if(i % 2 === 0){
            return 'number is even';
        } else {
            return 'number is odd';
        }
    }
}

console.log(iterator0To25(7)); // should say it's odd