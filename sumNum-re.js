function sumNum3(num){
 let sumRange = 0;
 for (let i=0; i <= num; i++) {
    sumRange = sumRange + i;
}
 return sumRange;
}

console.log(sumNum3(7)); // should return 28