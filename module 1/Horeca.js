let hoeveelbier = 0
let hoeveelfris= 0
let hoeveelwijn= 0
let prijsbier = 1
let prijswijn = 1.95
let prijsfris = 0.55

alert("Welkom bij de bar")
  while(true){
    let bestellen = prompt("Wat wilt u bestellen? uw keuze is bier, fris, wijn of stop als u wilt eindigen.").toLowerCase();
    if (bestellen == "bier") {
        let aantal=prompt("hoeveel bier wilt u bestellen?")
        hoeveelbier += parseInt(aantal)
        continue
    }
    if (bestellen == "fris") {
        let aantal=prompt("hoeveel fris wilt u bestellen?")
        hoeveelfris = parseInt(hoeveelfris) + parseInt(aantal)
        continue
    }
    if (bestellen == "wijn") {
        let aantal=prompt("hoeveel wijn wilt u bestellen?")
        hoeveelwijn = parseInt(hoeveelwijn) + parseInt(aantal)
        continue
    }
    if (bestellen == "stop") {
      break
    }
    else {
        alert("Dat hebben wij niet.")
        continue
    }
  }
totalbier = hoeveelbier*prijsbier
totalfris = hoeveelfris*prijsfris
totalwijn = hoeveelwijn*prijswijn
totaal= totalbier+totalfris+totalwijn


document.getElementById("titel").innerHTML = "De bar"
let bon = ""
if (hoeveelfris >0){
  bon += "Fris: "+hoeveelfris+" x "+"€"+prijsfris+" = " +"€"+ totalfris.toFixed(2)+"</br>"
}
if (hoeveelbier >0){
  bon +="Bier: "+hoeveelbier+" x "+"€"+prijsbier+" = " + "€"+totalbier.toFixed(2)+"</br>"
}
if (hoeveelwijn >0){
  bon += "Wijn: "+hoeveelwijn+" x "+"€"+prijswijn+" = " + "€"+totalwijn.toFixed(2)+"</br>"
}
bon+= "Totaal: "+"€"+parseFloat(totaal).toFixed(2)
document.getElementById("bon").innerHTML = bon+"</br>"