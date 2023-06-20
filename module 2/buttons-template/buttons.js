var button1count = document.getElementById("button1");
var button2count = document.getElementById("button2");
var button3count = document.getElementById("button3")
var count1 = 0
var count2 = 0
var count3 = 0
var current = 0
button1count.innerHTML=count1;
button2count.innerHTML=count2;
button3count.innerHTML=count3;

button1count.onclick = button1click;
button2count.onclick = button2click;
button3count.onclick = button3click;

function button1click(){if (current != 1){count1++}; button1count.style.backgroundColor ="red"; button1count.innerHTML=count1; current = 1;
    button2count.style.backgroundColor ="green"; button3count.style.backgroundColor ="green";
    document.getElementById("knop").style.backgroundImage = "url('images/bg1.jpg')";
    document.getElementById("fotos").src = 'images/1.jpg';}


function button2click(){if (current != 2){count2++};button2count.style.backgroundColor ="red"; button2count.innerHTML=count2; current = 2;
    button1count.style.backgroundColor ="green"; button3count.style.backgroundColor ="green";
    document.getElementById("knop").style.backgroundImage = "url('images/bg2.jpg')";
    document.getElementById("fotos").src = 'images/2.jpg';}


function button3click(){if (current != 3){count3++};button3count.style.backgroundColor ="red"; button3count.innerHTML=count3; current = 3;
    button1count.style.backgroundColor ="green"; button2count.style.backgroundColor ="green";
    document.getElementById("knop").style.backgroundImage = "url('images/bg3.jpg')";
    document.getElementById("fotos").src = 'images/3.jpg';}