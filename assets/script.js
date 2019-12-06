

var currentTime = moment();

chnagingInputColors();
displayText();



$("#save1").click( function(event) {
    event.preventDefault();
    gettingFirstEntry();
});
$("#save2").click( function(event) {
    event.preventDefault();
    gettingSecEntry();
});
$("#save3").click( function(event) {
    event.preventDefault();
    gettingThirdEntry();
});
$("#save4").click( function(event) {
    event.preventDefault();
    gettingFourthEntry();
});
$("#save5").click( function(event) {
    event.preventDefault();
    gettingFifthEntry();
});
$("#save6").click( function(event) {
    event.preventDefault();
    gettingSixthEntry();
});
$("#save7").click( function(event) {
    event.preventDefault();
    getting7THEntry();
});
$("#save8").click( function(event) {
    event.preventDefault();
    getting8THEntry();
});
$("#save9").click( function(event) {
    event.preventDefault();
    getting9THEntry();
});

function gettingFirstEntry(){
    const userEntryKey ="userEntry1";
    var userInfoArr = localStorage.getItem(userEntryKey) ? JSON.parse(localStorage.getItem(userEntryKey)) : [];
    localStorage.removeItem(userEntryKey);
    userInfoArr.push($("#userinput1").val());
   localStorage.setItem(userEntryKey,JSON.stringify(userInfoArr));
}
function gettingSecEntry(){
    const userEntryKey2 ="userEntry2";
    var userInfoArr2 = localStorage.getItem(userEntryKey2) ? JSON.parse(localStorage.getItem(userEntryKey2)) : [];
    localStorage.removeItem(userEntryKey2);
    userInfoArr2.push($("#userinput2").val());
   localStorage.setItem(userEntryKey2,JSON.stringify(userInfoArr2));
}
function  gettingThirdEntry(){
    const userEntryKey3 ="userEntry3";
    var userInfoArr3 = localStorage.getItem(userEntryKey3) ? JSON.parse(localStorage.getItem(userEntryKey3)) : [];
    localStorage.removeItem(userEntryKey3);
    userInfoArr3.push($("#userinput3").val());
   localStorage.setItem(userEntryKey3,JSON.stringify(userInfoArr3));
}
function  gettingFourthEntry(){
    const userEntryKey4 ="userEntry4";
    var userInfoArr4 = localStorage.getItem(userEntryKey4) ? JSON.parse(localStorage.getItem(userEntryKey4)) : [];
    localStorage.removeItem(userEntryKey4);
    userInfoArr4.push($("#userinput4").val());
   localStorage.setItem(userEntryKey4,JSON.stringify(userInfoArr4));
}
function  gettingFifthEntry(){
    const userEntryKey5 ="userEntry5";
    var userInfoArr5 = localStorage.getItem(userEntryKey5) ? JSON.parse(localStorage.getItem(userEntryKey5)) : [];
    localStorage.removeItem(userEntryKey5);
    userInfoArr5.push($("#userinput5").val());
   localStorage.setItem(userEntryKey5,JSON.stringify(userInfoArr5));
}
function  gettingSixthEntry(){
    const userEntryKey6 ="userEntry6";
    var userInfoArr6 = localStorage.getItem(userEntryKey6) ? JSON.parse(localStorage.getItem(userEntryKey6)) : [];
    localStorage.removeItem(userEntryKey6);
    userInfoArr6.push($("#userinput6").val());
   localStorage.setItem(userEntryKey6,JSON.stringify(userInfoArr6));
}
function  getting7THEntry(){
    const userEntryKey7 ="userEntry7";
    var userInfoArr7 = localStorage.getItem(userEntryKey7) ? JSON.parse(localStorage.getItem(userEntryKey7)) : [];
    localStorage.removeItem(userEntryKey7);
    userInfoArr7.push($("#userinput7").val());
   localStorage.setItem(userEntryKey7,JSON.stringify(userInfoArr7));
}
function  getting8THEntry(){
    const userEntryKey8 ="userEntry8";
    var userInfoArr8 = localStorage.getItem(userEntryKey8) ? JSON.parse(localStorage.getItem(userEntryKey8)) : [];
    localStorage.removeItem(userEntryKey8);
    userInfoArr8.push($("#userinput8").val());
   localStorage.setItem(userEntryKey8,JSON.stringify(userInfoArr8));
}
function  getting9THEntry(){
    const userEntryKey9 ="userEntry9";
    var userInfoArr9 = localStorage.getItem(userEntryKey9) ? JSON.parse(localStorage.getItem(userEntryKey9)) : [];
    localStorage.removeItem(userEntryKey9);
    userInfoArr9.push($("#userinput9").val());
   localStorage.setItem(userEntryKey9,JSON.stringify(userInfoArr9));
   
}

function displayText(){

    $('#userinput1').text(JSON.parse(localStorage.getItem("userEntry1")))
    $('#userinput2').text(JSON.parse(localStorage.getItem("userEntry2")))
    $('#userinput3').text(JSON.parse(localStorage.getItem("userEntry3")))
    $('#userinput4').text(JSON.parse(localStorage.getItem("userEntry4")))
    $('#userinput5').text(JSON.parse(localStorage.getItem("userEntry5")))
    $('#userinput6').text(JSON.parse(localStorage.getItem("userEntry6")))
    $('#userinput7').text(JSON.parse(localStorage.getItem("userEntry7")))
    $('#userinput8').text(JSON.parse(localStorage.getItem("userEntry8")))
    $('#userinput9').text(JSON.parse(localStorage.getItem("userEntry9")));
     }
function chnagingInputColors() {
    if (currentTime.hour() == 9) {
        $('#userinput1').css('background-color', '#D9D900');
    }
    if (currentTime.hour() == 10) {
        $('#userinput1').css('background-color', 'gray');
        $('#userinput2').css('background-color', '#D9D900');
    }
    if (currentTime.hour() == 11) {
        $('#userinput1 ,#userinput2').css('background-color', 'gray');
        $('#userinput3').css('background-color', '#D9D900');
    }
    if (currentTime.hour() == 12) {
        $('#userinput1 ,#userinput2,#userinput3').css('background-color', 'gray');
        $('#userinput4').css('background-color', '#D9D900');
    }
    if (currentTime.hour() == 13) {
        $('#userinput1 ,#userinput2,#userinput3,#userinput4').css('background-color', 'gray');
        $('#userinput5').css('background-color', '#D9D900');
    }
    if (currentTime.hour() == 14) {
        $('#userinput1 ,#userinput2,#userinput3,#userinput4,#userinput5').css('background-color', 'gray');
        $('#userinput6').css('background-color', '#D9D900');
    }
    if (currentTime.hour() == 15) {
        $('#userinput1 ,#userinput2,#userinput3,#userinput4,#userinput5,#userinput6').css('background-color', 'gray');
        $('#userinput7').css('background-color', '#D9D900');
    }
    if (currentTime.hour() == 16) {
        $('#userinput1 ,#userinput2,#userinput3,#userinput4,#userinput5,#userinput6,#userinput7').css('background-color', 'gray');
        $('#userinput8').css('background-color', '#D9D900');
    }
    if (currentTime.hour() == 17) {
        $('#userinput1 ,#userinput2,#userinput3,#userinput4,#userinput5,#userinput6,#userinput7,#userinput8').css('background-color', 'gray');
        $('#userinput9').css('background-color', '#D9D900');
    }
}