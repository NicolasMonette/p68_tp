video_play.addEventListener('change', function () {
    if (this.checked) {
        video.play();
    } else {
        video.pause();
    }

});
listteam.addEventListener('change', function () {
    var number_2 = document.getElementById('number2');
    if (listteam.value == 'Tampa Bay Lightning') {
        number_2.value = 1.25;
    } else if (listteam.value == 'Chicago Blackhawks') {
        number_2.value = 6;
    } else if (listteam.value == 'Anaheim Ducks') {
        number_2.value = 5;
    } else if (listteam.value == 'New York Rangers') {
        number_2.value = 1.5;
    }
});