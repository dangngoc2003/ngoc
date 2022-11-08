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
    console.log('a', a)
    document.getElementById("KQ").innerHTML= KQ;
}
function nhan() {
    let a = document.getElementById("a").value;
    let b =document.getElementById("b").value;
    let KQ = Number(a) * Number(b);
    console.log("a", a)
    document.getElementById('KQ').innerHTML= KQ;
}
function chia() {
    let a =document.getElementById("a").value;
    let b =document.getElementById("b").value;
    let KQ = Number(a) / Number(b);
    console.log("a", a)
    document.getElementById("KQ").innerHTML=KQ;
}