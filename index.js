// psuedokod
/**
 * Fråga spelaren om sten sax eller påse
 * Slumpa datorns val
 * Jämför spelaren och datorns val
 * Skriv ut vem som vann
 */

//Spelaren val
let användare = prompt ( "Välj sten, sax eller påse" );
let dator;

//Datorns slumpade val
let slump = (Math.random() * 3);

if (slump === 0) {
 dator = "sten";

} else if (slump === 1){
    dator = "sax";
} else {
    dator = "påse";
}

//Avgör vem som vinner

if (användare === dator) {
    alert( "Oavgjort! Ni valde båda " + användare);

} 
else if (
(användare === "sten" && dator === "sax") ||
(användare === "sax" && dator === "påse") ||
(användare === "påse" && dator === "sten")

){
 alert (" Du vann! Datorn valde" + dator);
}
else if (
användare === "sten" ||
användare === "sax" ||
användare === "påse"
) { 
    alert(" Du förlorade! Datorn valde"  + dator);

}
else {
    alert ("Fel val! Skriv sten, sax eller påse");
}