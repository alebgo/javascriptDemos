
/*
//var sayi1=Math.random()//Math.random: 0-1 arasında sayı üretmeyi sağlar.
//var sayi1=Math.random()*49 0'dan 49 a kadar rastgele sayı üretir.
//tam sayı üretmesi için
var sayi1=Math.ceil(Math.random()*90)//Örneğin 24.8 i 25 e yuvarlıyor
var sayi2=Math.ceil(Math.random()*90)
var sayi3=Math.ceil(Math.random()*90)
var sayi4=Math.ceil(Math.random()*90)
var sayi5=Math.ceil(Math.random()*90)
var sayi6=Math.ceil(Math.random()*90)

console.log("Kolon: "+sayi1+" "+sayi2+" "+sayi3+" "+ sayi4+" "+sayi5+" "+sayi6)



function sayiUret(){
    console.log( Math.ceil(Math.random()*90))
 }
 
 //fonksiyon bir tanımdır. sADECE çağırırsan çalışır.
 sayiUret()
 
 var sayi7=sayiUret()

*/
 function sayiTuret(){
    return Math.ceil(Math.random()*60)
 }

 
 //keyword: return
 sayiTuret()

 var sayi8=sayiTuret()
 var sayi9=sayiTuret()

 console.log("Kolan:"+sayi8+" "+sayi9)