//Değişkenlerin kapsamı
ustLimit=49
var degisken="Deger"
function sayiTuret(ustLimit=49){
    console.log(degisken)
    return Math.ceil(Math.random()*ustLimit)
 }

 
 
 //keyword: return
sayiTuret()
console.log(ustLimit)

var sayi1=sayiTuret()
var sayi2=sayiTuret()
var sayi3=sayiTuret()
var sayi4=sayiTuret()
var sayi5=sayiTuret()
var sayi6=sayiTuret()

console.log("Kolon: "+sayi1+" "+sayi2+" "+sayi3+" "+ sayi4+" "+sayi5+" "+sayi6)