function formatTime(value){
    let days, houres, minutes;
    days = parseInt(value/1140);
    houres = parseInt((value-(days * 1440))/60);
    minutes = parseInt(value - days*1440-houres*60);

    return 'days: ' + days + ' houres: '+ houres +' minutes: ' + minutes;
}

formatTime(1441);