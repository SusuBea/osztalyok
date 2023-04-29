import Szemely from "./Szemely.js"

$(function(){
    console.log("helló")
    const szuloElem = $(".tarolo")
    //példányosítás
    const szemely1 = new Szemely("Béla", 1965, szuloElem);
    const szemely2 = new Szemely("Jolán", 1975, szuloElem);
    //console.log(szemely1)
    //console.log(szemely2)
    //console.log(szemely1.nev)
    szemely1.nev = "Kálmán"
    //console.log(szemely1.nev)
    szemely1.masikNev = "Géza"
    //console.log(szemely1)
    //futás időben változtathatóak az osztálypéldányok
    //console.log(szemely1.#szulNev) privát adattagot kívülről nem érek el 
    console.log(szemely1.getSzulNev())
    console.log(szemely1.kor())

})