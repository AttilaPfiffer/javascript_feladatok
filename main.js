import {elso_feladat} from "./fuggvenyek.js";

//console.log(elso_feladat(5))
let szam
/* var let const - hatókörök */
// console.log(szam);  szam -> hibaüzenet - nem fut tovább, initialization (var) //
szam = 12;

function fv1(){
    let szam = 5;
    console.log(szam);
    let masikszam = 23;
    console.log(masikszam);
}

//console.log(masikszam);  hibaüzenet - reference error
//console.log(szam);
//fv1();

//Varral deklarált változók esetén is működik a hoistring, ami azt jelenti, hogy a deklaráció olyan, mintha a hatókörén kívül történt volna. Azonban az értékadás abban a sorban történik, ahol azt leírtuk. A varral deklarált változók hatóköre lehet modulszintű, vagy lehet függvény szintű.//

function fv2(){
    let x = 2
    {
        let x = 3
        console.log(x)
    }
    //let x = 4 - ez hiba
    x = 4
    console.log(x)
}

//fv2()

//let hatóköre lehet file és blokk szintű, a var hatóköre függényszintű és file szintű

function fv3(){
    for(let index = 0; index < 3; index++){
        console.log(index)
    }

    console.log(index)
}

//fv3()

function fv4(szam){
    // ternális operátorral oldd meg
    // a függvény adja vissza a 3-mal 
    let szoveg = " "
    szam % 3 === 0 ? (szoveg = "nulla") : (szam % 3 === 1 ? szoveg = "egy") : (szoveg = "ketto");;
    
    
    return szoveg
}

// szoveg: "nulla" vagy "egy" vagy "ketto"

fv4(8)