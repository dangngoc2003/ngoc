function Cong() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let KQ = Number(a) + Number(b);
    document.getElementById("KQ").innerHTML= KQ;
}
function Tru() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let KQ = Number(a) - Number(b);
    document.getElementById("KQ").innerHTML= KQ;
}