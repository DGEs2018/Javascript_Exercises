function sum_of_nums(num) {
    // first define a variable called sum, so we are able to call it within the loop
    let sum = 0;

    // loop is an ideal method to apply as this handles summing consecutive numbers in a range, return sum +=
    for (let i=1; i <= num ; i++) {
        sum += i
    }

    return sum
}

console.log(sum_of_nums(5)) // does return 15, for instance

// Looking up recurrence, the way to solve it using recurrence (as recommended by Patryk)