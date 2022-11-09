function kiemtra() {
    let cn = +document.getElementById("Cân nặng").value;
    let cc = +document.getElementById("chiều cao").value;
    let bmi = cn / (cc * cc)
    if (bmi < 18.5) {
        alert("Underwieght")
    } else if (bmi < 25) {
        alert("Nomarl")
    } else if (bmi < 30) {
        alert("Overweight")
    } else {
        alert("Obese")
    }
}