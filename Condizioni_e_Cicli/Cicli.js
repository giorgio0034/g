/*
let v= 28;



if(v<18){
    console.log('insufficente');
}else if(v>=18 && v<21){
    console.log('sufficiente');
}else if(v>=21 && v<24){
    console.log('buono');
}else if(v>=24 && v<27){
    console.log('distinto');
}else if(v>=27 && v<=29){
    console.log('ottimo');
}else if(v==30){
    console.log('eccellente');
}else{
    console.log('voto non valido')
}

switch(true){
    case v<18:
        console.log('Insufficente');
        break;
    case v>=18 && v<21:
        console.log('Sufficente');
        break;
    case v>=21 && v<24:
        console.log('buono');
        break;
    case v>=24 && v<27:
        console.log('distinto');
        break;
    case v>=27 && v<=29:
        console.log('ottimo');
        break;
    case v==30:
        console.log('eccellente');
        break;
    default:
        console.log("Voto non valido");
}

*/

//let t=prompt("Inserisci il numero della temperatura");//

/*
if(t<-10){
    console.log('copriti ancora ti raffreddi');

}else if(t<0){
    console.log('non è freddo quanto umido');

}else if(t<20){
    console.log('non ci sono più le mezze stagioni');
}else if(t<30){
    console.log('mi dia una peroni sudata');
}else if(t>=30){
    console.log('lu mare, lu sole, lu vientu');
} else{
    console.log('inserimento non valido');
}

*/

/*
switch(true){

    case t<-10:
       console.log('copriti ancora ti raffreddi');
       break;
    case t<0:
        console.log('non è freddo quanto umido');
        break;
    case t<20:
        console.log('non ci sono più le mezze stagioni');
        break;
    case t<30:
        console.log('mi dia una peroni sudata');
        break;
    case t>=30:
        console.log('lu mare, lu sole, lu vientu');
        break;
    default:
        console.log('inserimento non valido');
}
*/

/*
let num = 2;
let punteggio=0;


for(let i=0;i<=10;i++){
   
    punteggio=num*i;

    console.log(punteggio);

}

*/

/*
let punteggio_pari=0;
let punteggio_dispari_totale=0;

let punteggio_dispari=0;

for(let i=0;i<10;i++){

    punteggio_pari=2*i;
    console.log(punteggio_pari);
    
    

    
}



console.log('numeri pari');

for(let i=0;i<10;i++){
     punteggio_dispari=2*i+1;
    console.log(punteggio_dispari);
    punteggio_dispari_totale+=punteggio_dispari;
}

console.log(punteggio_dispari_totale/10);

console.log('numeri dispari');

*/


let numero=prompt("Digita un numero");

switch(true){

    case numero==1:
        console.log('E’ stata selezionata l’acqua');
        break;

    case numero==2:
        console.log('E’ stata selezionata coca cola');
        break;
    case numero==3:
        console.log('E’ stata selezionata birra');
        break;
    default:
        console.log(prompt("Digita un numero"));
    }