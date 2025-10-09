/*
let array_1 =  ['un', 'per', 'incatenarli','Anello', 'trovarli','ghermirli', 'e','gondor', 'mark'];



let array_2 = ['trovarli,','tu', 'sciocchi','tu', 'sciocchi', 'padron', 'Sauron','nel', 'fuggite', 'gandalf','domarli,', 'passare', 'buio'];


console.log(array_1[0],array_1[3],array_1[1],array_2[10],array_1[0],array_1[3],array_1[1],array_2[0]
    ,array_1[0],array_1[3],array_1[1],array_1[5],array_1[6],array_2[7],array_2[12],array_1[2]);

*/

/*

let tiri= Number(prompt('Inserisci il numero di tiri da fare'));
let utente1;
let utente2;



let punteggioutente1=0;
let punteggioutente2=0;




for(i=1;i<=tiri;i++){
    let tiro1 = Math.floor(Math.random() * 6) + 1;
    let tiro2 = Math.floor(Math.random() * 6) + 1;

    console.log(`Tiro ${i}: Utente 1 = ${tiro1}, Utente 2 = ${tiro2}`);

    punteggioutente1 += tiro1;
    punteggioutente2 += tiro2;



}

console.log(`\nPunteggio finale:`);
console.log(`Utente 1: ${punteggioutente1}`);
console.log(`Utente 2: ${punteggioutente2}`);

if (punteggioutente1 > punteggioutente2) {
    console.log("Vince Utente 1!");
} else if (punteggioutente2 > punteggioutente1) {
    console.log("Vince Utente 2!");
} else {
    console.log("Pareggio!");
}
*/

/*
function stampa(n){



    for(i=1;i<=n;i++){

        if(i%15==0){
            console.log('fizzbuzz');
        }else if(i%5==0){
            console.log('Buzz');
        }else if(i%3==0){
            console.log('Fizz');
        }else{
            console.log(i);
        }





    }

}

stampa(45);
*/

/*

function stampa(n){



    for(i=1;i<=n;i++){

        if(n<=9){
            console.log('1 cifra');
        }else if(n>=10 && n <=99){
            console.log('2 cifre');
        }else if(n>=100 && n<=999){
            console.log('3 cifre');
        }else if(n>=1000 && n<=9999){
            console.log('4 cifre')
        } else if(n>=10000){
            console.log('numero troppo grande');
        }



    }

}

stampa(1200000);


*/



/*
let frase = 'i topi non avevano nipoti';

let no_spazi = frase.replace(/\W/g, "");
console.log(no_spazi);


function palindroma(frase){




let splitted= frase.split('').reverse().join('').replace(/\W/g, "");
   
    

    if(no_spazi==splitted){
        console.log('True');
    } else{
        console.log('False')
  }
   
console.log(splitted);


}



palindroma(frase);

*/

//let array1=[3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];


   // array1.sort((a,b)=> a-b);
   
  //  console.log(array1);

let a =[3, 5, 10, 2, 8];

function Media(a){
    
    let somma= a.reduce((acc,number)=> acc+number);
    let media= somma/a.length;

    return media;
}

let media = Media(a);

console.log(`la media è ${media}`);

let minimo= Math.min(3,5,10,2,8);
console.log(`il minimo è ${minimo}`);