

var currentTime = moment();

chnagingInputColors();



$("#save1").click( function(event) {
    event.preventDefault();
    gettingFirstEntry();
});
function gettingFirstEntry(){
    const userEntryKey ="userEntry1";
    var userInfoArr = localStorage.getItem(userEntryKey) ? JSON.parse(localStorage.getItem(userEntryKey)) : [];
    localStorage.removeItem(userEntryKey);
    userInfoArr.push($("#userinput1").val());
   localStorage.setItem(userEntryKey,JSON.stringify(userInfoArr));
}
function chnagingInputColors() {
    if (currentTime.hour() == 9) {
        $('#userinput1').css('background-color', 'gray');
    }
    if (currentTime.hour() == 10) {
        $('#userinput1').css('background-color', 'gray');
        $('#userinput2').css('background-color', 'yellow');
    }
    if (currentTime.hour() == 11) {
        $('#userinput1 ,#userinput2').css('background-color', 'gray');
        $('#userinput3').css('background-color', 'yellow');
    }
    if (currentTime.hour() == 12) {
        $('#userinput1 ,#userinput2,#userinput3').css('background-color', 'gray');
        $('#userinput4').css('background-color', 'yellow');
    }
    if (currentTime.hour() == 13) {
        $('#userinput1 ,#userinput2,#userinput3,#userinput4').css('background-color', 'gray');
        $('#userinput5').css('background-color', 'yellow');
    }
    if (currentTime.hour() == 14) {
        $('#userinput1 ,#userinput2,#userinput3,#userinput4,#userinput5').css('background-color', 'gray');
        $('#userinput6').css('background-color', 'yellow');
    }
    if (currentTime.hour() == 15) {
        $('#userinput1 ,#userinput2,#userinput3,#userinput4,#userinput5,#userinput6').css('background-color', 'gray');
        $('#userinput7').css('background-color', 'yellow');
    }
    if (currentTime.hour() == 16) {
        $('#userinput1 ,#userinput2,#userinput3,#userinput4,#userinput5,#userinput6,#userinput7').css('background-color', 'gray');
        $('#userinput8').css('background-color', 'yellow');
    }
    if (currentTime.hour() == 17) {
        $('#userinput1 ,#userinput2,#userinput3,#userinput4,#userinput5,#userinput6,#userinput7,#userinput8').css('background-color', 'gray');
        $('#userinput9').css('background-color', 'yellow');
    }
}
gettingFirstEntry();