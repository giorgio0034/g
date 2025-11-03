


//let h1= document.querySelector('#titolo');

//console.dir(h1);

//let wrapper_di_prova = document.querySelector('#wrapper_di_prova');
//let addParagraph = document.querySelector('#addParagraph')

//let ul = document.querySelector('ul');
//console.dir(ul);

//wrapper_di_prova.innerHTML = `

//<p> questo è un paragrafo </p>
//<img src="https://picsum.photos/300" alt="immagine casuale" >

//`</img>
//


//let h1= document.querySelector('h1');
//h1.innerHTML='Benvenuti';


//h1.classList.add('matteo','pippo');
//h1.style.color='red';//
/*
let names =['Luca','Giacomo'];

let changecolorBtn= document.querySelector('#changecolorBtn');
console.dir(h1.classList);

let p= document.querySelectorAll('p');

//p.style.color='green'

console.dir(p);


changecolorBtn.addEventListener('click',()=>{
    h1.classList.toggle('custom-title');
});

addParagraph.addEventListener('click',()=>{
   
names.forEach((name)=>{
    let paragrafo= document.createElement('p');
    paragrafo.innerHTML=name;
    paragrafo.classList.add('bg-costum');
    wrapper_di_prova.appendChild(paragrafo);

});

});

*/
let paragrafi=document.querySelectorAll('p');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');







button3.addEventListener('click',()=>{
paragrafi.forEach((p)=>{
    p.classList.toggle('custom-paragraph');
});

});



button2.addEventListener('click',()=>{

paragrafi.forEach((p)=>{
p.classList.toggle('font');
});
});


button1.addEventListener('click',()=>{

paragrafi.forEach((p)=>{

   let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
   p.style.color = randomColor;

   

});
});

