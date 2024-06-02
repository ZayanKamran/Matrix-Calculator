function add() {
    document.getElementById("r_1").value = Number(document.getElementById("m1_1").value) + Number(document.getElementById("m2_1").value);
    document.getElementById("r_2").value = Number(document.getElementById("m1_2").value) + Number(document.getElementById("m2_2").value);
    document.getElementById("r_3").value = Number(document.getElementById("m1_3").value) + Number(document.getElementById("m2_3").value);
    document.getElementById("r_4").value = Number(document.getElementById("m1_4").value) + Number(document.getElementById("m2_4").value);
 }

function subtract() {
    document.getElementById("r_1").value = Number(document.getElementById("m1_1").value) - Number(document.getElementById("m2_1").value);
    document.getElementById("r_2").value = Number(document.getElementById("m1_2").value) - Number(document.getElementById("m2_2").value);
    document.getElementById("r_3").value = Number(document.getElementById("m1_3").value) - Number(document.getElementById("m2_3").value);
    document.getElementById("r_4").value = Number(document.getElementById("m1_4").value) - Number(document.getElementById("m2_4").value);
 }

 function multiply() {
    document.getElementById("r_1").value = Number(document.getElementById("m1_1").value) * Number(document.getElementById("m2_1").value);
    document.getElementById("r_2").value = Number(document.getElementById("m1_2").value) * Number(document.getElementById("m2_2").value);
    document.getElementById("r_3").value = Number(document.getElementById("m1_3").value) * Number(document.getElementById("m2_3").value);
    document.getElementById("r_4").value = Number(document.getElementById("m1_4").value) * Number(document.getElementById("m2_4").value);
 }

 function divide() {
    document.getElementById("r_1").value = Number(document.getElementById("m1_1").value) / Number(document.getElementById("m2_1").value)
    document.getElementById("r_2").value = Number(document.getElementById("m1_2").value) / Number(document.getElementById("m2_2").value)
    document.getElementById("r_3").value = Number(document.getElementById("m1_3").value) / Number(document.getElementById("m2_3").value)
    document.getElementById("r_4").value = Number(document.getElementById("m1_4").value) * Number(document.getElementById("m2_4").value);
}