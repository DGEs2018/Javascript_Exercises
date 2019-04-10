function time_conversion(minutes) {
    if (minutes % 60 == minutes) {
        return ('0' + ':' + 'minutes' )
    } else {
        ('??' + ':' + (minutes % 60) )
    }
}



