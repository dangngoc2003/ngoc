function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromC == "WON" && To == "VND") {
        Result = "Result: " + (Amount * 17600) + " W ";
    }
    else if (FromC == "VND"&& To =="WON"){
        Result = "Result: "+ (Amount / 17600) + " W ";
    }
    else if (FromC == "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " W "
    }

    document.getElementById("Result").innerHTML = Result;
}