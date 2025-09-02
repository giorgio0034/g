let num1;
let num2;

num1=4;
num2=3;

console.log(num1);
console.log(num2);

let saluto ='ciao';

console.log(saluto);

saluto='salve';

console.log(saluto);

const PIGRECO= 3.14159265359;




console.log(PIGRECO);




/* Operatori 1 */

let a;
let b;
let c;
let d;
let e;

a=3;
b=2;
c=4;
d=6;
e=7; 
let somma;
let media;

somma= (a+b+c+d+e);
media= (a+b+c+d+e)/5;

console.log('La somma tra i numeri equivale a', somma);
console.log('la media equivale a', media);

/* Operatore 2 */

const annocorrente= 2025;
const annodinascita= 1980;


let età;

età= annocorrente-annodinascita;

let arrivoaicento;
arrivoaicento= 100 - età;

console.log('Hai',età ,'e ti mancano',arrivoaicento ,'per compierne 100' );



/* Operatori 3 */
let i = prompt(" Inserisci il primo numero");
let l= prompt("Inserisci il secondo numero");
let addizione;
let sottrazione;
let moltiplicazione;
let potenza;

i = Number(i);
l = Number(l);

addizione= i+l;
sottrazione=i-l;
moltiplicazione= i*l;
potenza= i**l;

console.log( 'Con i numeri da te scelti, i risultati delle varie operazioni sono: somma',addizione, 'sottrazione',sottrazione, 'moltiplicazione',moltiplicazione, 'potenza',potenza
);


/*Operatori 4 */

let numtotalegatti=25;
let numgattiinfila=6;
let modulo;


let file= Math.ceil(numtotalegatti/numgattiinfila);

let mancanti= Math.floor(numtotalegatti/numgattiinfila);
modulo=numtotalegatti%numgattiinfila;

console.log('Ci sono',file,'file di gatti e ne mancano',mancanti,'per una nuova fila',modulo,'rimane fuori');






