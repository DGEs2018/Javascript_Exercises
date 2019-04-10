function time_conversion(minutes) {
    if (minutes % 60 == minutes) {
        return ('0' + ':' + 'minutes' )
    } else {
        return (Math.floor(minutes % 60) + ':' + Math.ceil(minutes % 60) )
    }
}



