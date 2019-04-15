// Write a method that takes in a number of minutes, and returns a string that formats the number into hours:minutes.

// input: number (in minutes)
// output: string (in format hh:mm)

// homework: if the minutes is smaller than 10 and a zero in front

// cover edge cases:
// negative number --> tell the user to only input positive number if they a negative one
// string? --> tell user to only enter a number

function timeConversion(minutes) {
  // 1. find out how many hours are in the minutes
  const hours = Math.floor(minutes / 60);

  // 2. find the remaining minutes
  const onlyMinutes = minutes % 60;
  if (typeof minutes !== number) {
    return "please enter only a number!";
    
  }
  if(onlyMinutes < 0) {
    return "only positive number is allowed";
    
  }

  if (onlyMinutes < 10) {
    return hours + ':0' + onlyMinutes;
  }  
  // 3. return the concatenated hours and minutes with a :
  return hours + ':' + onlyMinutes;

  // 4. if the minutes input is smaller than 10, add a zero in front
  /* const onlyMinutes = minutes % 60
  if (onlyMinutes < 10) {
    return hours + ':0' + onlyMinutes;
  } */

  // 5. alert the user to 'only positive number is allowed' if they enter negative one
  /* if(onlyMinutes < 0) {
     alert ('only positive number is allowed');
  } */
}

console.log(timeConversion(-10)); // should return: 'only positive number is allowed' - still needs a fix
console.log(timeConversion('ten')); // should return: 'please enter only a number!'






