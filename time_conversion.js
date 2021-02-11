function time_conversion(minutes) {

let remainderMinutes = Math.floor(minutes/60);
    if (minutes % 60 == minutes) {
        return ('0' + ':' + 'minutes' )
    } else {
        return (Math.floor(minutes % 60) + ':' + Math.ceil(minutes % 60) )
    }
}
console.log(time_conversion(54));


