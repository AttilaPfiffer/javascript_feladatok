export function elso_feladat(szam) {
    let ps = false;
    /* if (szam % 2 === 0){
        ps = true;
    } */
    
    // TERMINÁTOR OPERÁTOR (TERNÁLIS OPERÁTOR)
    szam % 2 === 0 ? ps = true : ps = false;
    return ps
}