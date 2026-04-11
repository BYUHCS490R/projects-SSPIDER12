function submitForm(e){
e.preventDefault();

let name=document.getElementById("name").value;
let hero=document.getElementById("hero").value;

setTimeout(function(){
document.getElementById("msg").innerHTML=
"Thanks " + name + "! Your favorite hero choice (" + hero + ") has been submitted.";
document.getElementById("form").reset();
},800);
}