let thang_1 = "1";
let thang_2 = "2";
let thang_3 = "3";
let thang_4 = "4";
let thang_5 = "5";
let thang_6 = "6";
let thang_7 = "7";
let thang_8 = "8";
let thang_9 = "9";
let thang_10 = "10";
let thang_11 = "11";
let thang_12 = "12";

 function check_month() {
     let month = document.getElementById("month").value; //'12'
    if (month == thang_1 || month == thang_3 || month == thang_5 || month == thang_7 || month == thang_8 || month == thang_10 || month == thang_12) {
        document.getElementById("result").innerHTML = "Tháng " + month + " có 31 ngày"
   } else if (month == thang_4 || month == thang_6 || month == thang_9 || month == thang_11) {
         document.getElementById("result").innerHTML = "Tháng " + month + " có 30 ngày"
     } else if (month == thang_2) {
         document.getElementById("result").innerHTML = "Tháng " + month + " có 28 hoặc 29 ngày"
     } else {
        document.getElementById("result").innerHTML = "Vui lòng nhập lại tháng"
    }
 }
