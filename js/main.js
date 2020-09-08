$(document).ready(function () {
    var tt = new Date();
    var minHour = tt.getHours();
    var minMinute = parseInt(tt.getMinutes() / 10);
    var today;
    var day, selectTime;

    document.getElementById("tel").value = "+998";
    document.getElementById("time").value = "СЕГОДНИЯ, 18 МАРТА  |  17:15";



    function setTime(hour, minute) {
        $("select").html('');
        if (document.getElementById('oneBtn').classList.contains('activeButton')) {

            if (hour <= minHour) {
                hour = minHour;
                if (minute < minMinute / 10 && minMinute >= 3) {

                    minute = 0;
                    hour++;

                } else if (minute < minMinute / 10 && minMinute < 3) {
                    minute = 3;
                }

            }

            if (hour >= 21) {
                alert("Qabul vaqti tugadi, Ertangi kun uchun vaqtni tanlang");
                $("#twoBtn").addClass("activeButton");
                $("#oneBtn").removeClass("activeButton");
            }

        }

        // setTime(9,0);
        while (hour >= 9 && minute >= 0 && hour < 21) {

            if (minute === 6) hour++;


            if (minute === 6) {
                minute = 0;
            }

            var option = ' <option value=' + hour + minute + '>' + hour + ':' + minute + '0' + '</option>';
            $("select").append(option);
            minute += 3;


        }
    }



    function getChange(sel) {
        selectTime = (sel.options[sel.selectedIndex].text);
        console.log(selectTime);
    }


    $(".confirm").click(function () {
        $(this).children().toggleClass("activeButton");
    });
    $("#oneBtn").click(function () {
        $(this).addClass("activeButton");
        $("#twoBtn").removeClass("activeButton");

        setTime(9, 0);
        $(".warning").addClass("d-none");

    });
    $("#twoBtn").click(function () {
        $(this).addClass("activeButton");
        $("#oneBtn").removeClass("activeButton");
        setTime(9, 0);
        $(".warning").addClass("d-none");


    });

    $("#time").click(function () {
        $(".time").removeClass("d-none");


    });
    $(".timeBtn").click(function () {


        if (document.getElementById("oneBtn").classList.contains("activeButton")) {
            day = "СЕГОДНЯ";
            $(".time").addClass("d-none");
            today=tt.getDate();
            selectTime = $("#dataTime option:selected").text();

            document.getElementById("time").value = day+ ', '+today+' ФЕВРАЛ | '+selectTime;
        }else if(document.getElementById("twoBtn").classList.contains("activeButton")){
            day="ЗАВТРА";
            $(".time").addClass("d-none");
            today=Math.floor(tt.getDate())+1;
            selectTime = $("#dataTime option:selected").text();
            document.getElementById("time").value = day+ ', '+today+' ФЕВРАЛ | '+selectTime;
        } else {
            $(".warning").removeClass("d-none");

        }





    });





});


