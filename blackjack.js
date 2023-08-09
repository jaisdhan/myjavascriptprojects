"use strict mode"
/*
console.log("Bienvenido al BlakJack ");
function getMessage(mano){
let mensaje;
    if(mano==21){
        return "Black Jack";
    }else{
         mensaje=(mano>21)?"Perdiste!":"Sigue jugando" ;
    }
    return mensaje;
    
}
*/
function getRandomCard(){
    let carta=["A", "1", "2","3","4","5","6","7","8","9","10","J","K","Q"];
    let palo=["C","D","H","S"];
    let carta_aleatoria=Math.floor(Math.random()*carta.length);
    let palo_aleatorio=Math.floor(Math.random()*palo.length);

    let c = carta[carta_aleatoria];
    let p = palo[palo_aleatorio];

    alert(c)
    alert(p)

}
let carta = getRandomCard()
/*
let carta1=getRandomCard();
let carta2=getRandomCard();
console.log("carta 1" +carta1 + " carta 2 " + carta2 ) ;
let mano=carta1+carta2 ;
console.log("mano: "+ mano) ;
let message=getMessage(mano);
while(message == "Sigue jugando"){
    mano+=getRandomCard();
    console.log(mano);
    message=getMessage(mano);
}
console.log(message);
*/