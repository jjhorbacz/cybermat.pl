//zawartosc do wysiwtlania w okreslonym czasie
function ShowOnTimeSendingToday() {

    var daysWorking = [{ dayWorking: 2, startTimeWorking: '0', endTimeWorking: '1400' }, { dayWorking: 3, startTimeWorking: '0', endTimeWorking: '1400' }, { dayWorking: 4, startTimeWorking: '0', endTimeWorking: '1400' }, { dayWorking: 5, startTimeWorking: '0', endTimeWorking: '1400' }];
    var a = new Date();
    var nowDay = a.getDay(); //0-6 denotes Sunday, monday, tuesday etc etc.
    var nowHours = a.getHours();
    nowHours = nowHours * 100;
    var nowMinutes = a.getMinutes();
    var nowTime = nowHours + nowMinutes;
    if (daysWorking.find(o => o.dayWorking === nowDay && o.startTimeWorking <= nowTime && o.endTimeWorking >= nowTime)) {
        $(".showFromTuetoThu").addClass("showLi");
    }
}
ShowOnTimeSendingToday();

//zawartosc do wysiwtlania w okreslonym czasie
function ShowOnTimeSendingWeekends() {

    var daysWorking = [{ dayWorking: 1, startTimeWorking: '0', endTimeWorking: '2359' }, { dayWorking: 2, startTimeWorking: '1401', endTimeWorking: '2359' }, { dayWorking: 3, startTimeWorking: '1401', endTimeWorking: '2359' }, { dayWorking: 4, startTimeWorking: '1401', endTimeWorking: '2359' }, { dayWorking: 5, startTimeWorking: '1401', endTimeWorking: '2359' }, { dayWorking: 6, startTimeWorking: '0', endTimeWorking: '2359' }, { dayWorking: 0, startTimeWorking: '0', endTimeWorking: '2359' }];
    var a = new Date();
    var nowDay = a.getDay(); //0-6 denotes Sunday, monday, tuesday etc etc.
    var nowHours = a.getHours();
    nowHours = nowHours * 100;
    var nowMinutes = a.getMinutes();
    var nowTime = nowHours + nowMinutes;
    if (daysWorking.find(o => o.dayWorking === nowDay && o.startTimeWorking <= nowTime && o.endTimeWorking >= nowTime)) {
        $(".showFromThutoMon").addClass("showLi");
    }
}
ShowOnTimeSendingWeekends();

//timer na pasku
function makeTimer() {

    $(".monos").css('font-family', 'monospace');
    var endTime = new Date("13 February 2023 9:00:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    if ($(".odni").html() === "0") { $('.odni').css('display', 'none'); }
    if ($(".odni").html() === "0") { $('.dletter').css('display', 'none'); }
    if ($(".ogodz").html() === "00") { $('.ogodz').css('display', 'none'); }
    if ($(".ogodz").html() === "00") { $('.hletter').css('display', 'none'); }
    if ($(".omin").html() === "00") { $('.omin').css('display', 'none'); }
    if ($(".omin").html() === "00") { $('.mletter').css('display', 'none'); }
    if (timeLeft < "00") { $('.odni, .dletter, .ogodz, .hletter, .omin, .mletter, .osek, .sletter').css('display', 'none'); }

    $(".odni").html(days);
    $(".ogodz").html(hours);
    $(".omin").html(minutes);
    $(".osek").html(seconds);

}

setInterval(function () { makeTimer(); }, 100);

//kopiowanie elementu np kodu z paska, animacja
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    $('.button1').animate({ opacity: "0.3" }, 200);
    $('.button1').animate({ opacity: "1" }, 200);
}

//jezeli element listy ma klase onlyMobile, wyswietlaj ponizej 979px
if ($(window).width() > 979) {
    $('.onlyMobile').removeClass('showLi');
}

//funkcja przesuniecia paska
function PrzesunTekst2() {
    var elem1 = $('.przesunPasek li.showLi'), q = elem1.length, i = 0;
    function PrzesunTekst1() {
        elem1.eq(i % q).fadeIn(700, function () {
            elem1.eq(i % q).delay(2000).fadeOut(700, PrzesunTekst1);
            i++;
        });
    }
    PrzesunTekst1();
} PrzesunTekst2();