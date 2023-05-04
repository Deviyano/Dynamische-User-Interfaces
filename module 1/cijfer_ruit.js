var aantal = prompt("Welk cijfer wil je voor je cijferruit?");
var tussen = ""
for(i = 1;i <=aantal;i++ ){
tussen += i
document.getElementById("antwoord").innerText += tussen + "\n";
if(i == aantal){
  tussen += ""
}
else{
  tussen+= "-"
}
}
for (i = aantal; i>= 1; i--){
  tussen = tussen.replace(i, "")
  tussen =tussen.substring(0,tussen.length - 1)
  document.getElementById("antwoord").innerText += tussen + "\n";
}