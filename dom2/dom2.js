//1 Creare l'oggetto rubrica
//2 catturare la colonna dove andremo a creare tante card quanti sono i nostri contatti
//3 Creare un metodo che mi mostra tutti i contatti
//4 Il metodo crea delle duplicazioni. devo risolvere il problema
//5 Abbiamo risolto ma vogliamo che il bottone Mostra Rubrica e al secondo click nasconda la rubrica

//Aggiunta Contatto
//1 Creare un metodo per aggiungere contatti. Questo metodo avrà bisogno di un nuovo nome e nuovo numero
//2 Agendo sulla lista pusheremo su un nuovo contatto

//Eliminazione Contatto
//1 creare un metodo che cancelli il contatto. Sappiamo già che utilizzeremo lo.splice()

//1 Utilizzare l'indice dell'icona per utilizzare lo splice
//2 Catturare tutte le icone


//Wrapper dei contatti
let contactsWrapper= document.querySelector('#contactsWrapper');

//bottoni
let showContactsbtn= document.querySelector('#showContactsbtn');
let addContactbtn=  document.querySelector('#addContactbtn');
let removeContactbtn= document.querySelector('#removeContactbtn');
let Editbtn= document.querySelector('#Editbtn');


//input
let nameInput= document.querySelector('#nameInput');
let numberInput= document.querySelector('#numberInput');

//icone

//let icons= document.querySelectorAll('.icon');

//console.log(icons);




//Variabile d'appoggio

let check=false;



let rubrica= {
  lista_contatti:[
    {contact_name:'Yoda', phone_number: 3333333333},
    {contact_name:'Carlo', phone_number: 34444444444},
    {contact_name:'Alberto', phone_number: 3555555555},
  ],


showContacts : function(){
  contactsWrapper.innerHTML='';
    this.lista_contatti.forEach((contatto)=>{
        let div= document.createElement('div');
        div.classList.add('card-custom');
        div.innerHTML = `
         <p class="lead">${contatto.contact_name}</p>
                <p>${contatto.phone_number}</p>
                <i class="fa-sharp-duotone fa-solid fa-trash fa-1.5x icon"></i>
                <i class="fa-solid fa-pen fa-1.5x icon2"></i>
            
        
        
        `;
        contactsWrapper.appendChild(div);
    });
      let icons= document.querySelectorAll('.icon');
        icons.forEach((icona,i)=>{
            icona.addEventListener('click',()=>{
                console.log(`ciao sono l icona con indice ${i}`);
                this.lista_contatti.splice(i,1);
                this.showContacts();
                
            });
        });

          let icons2= document.querySelectorAll('.icon2');
        icons2.forEach((icona2,i)=>{
            icona2.addEventListener('click',()=>{
                console.log(`ciao sono l icona con indice ${i}`);
                

                
            });
        });
        
},
addContacts : function(Newname,Newnumber){
  
  if(Newname && Newnumber){
      this.lista_contatti.push({contact_name:Newname, phone_number: Newnumber});
      this.showContacts();
   if(check==false){
      check=true;
      showContactsbtn.innerHTML='Nascondi Contatti';

 }
}  else{ 
  alert('Devi inserie sia Nome e numero')
  }
},

removeContactbtn : function(removedname){

let names= this.lista_contatti.map((contatto)=>contatto.contact_name);
let index= names.indexOf(removedname);

if(index>=0){
  this.lista_contatti.splice(index,1);

 this.showContacts();
 if(check==false){
      check=true;
      showContactsbtn.innerHTML='Nascondi Contatti';

 }
}


},

editContactbtn : function(NewName, NewNumber){
    let contact_found= this.lista_contatti.find((contatto)=> contatto.contact_name==NewName);
    console.log(contact_found);
    if(contact_found != undefined){
      contact_found.phone_number=NewNumber;
    } else{
      console.log('Nome non esiste');
    }
}




};



showContactsbtn.addEventListener('click',()=>{
 if(check==false){
 rubrica.showContacts();
check=true;
showContactsbtn.innerHTML='Nascondi Contatti';

 }else{
  contactsWrapper.innerHTML='';
  check=false;
  showContactsbtn.innerHTML='Mostra Contatti';
 }
 
});



addContactbtn.addEventListener('click',()=>{
    rubrica.addContacts(nameInput.value,numberInput.value);
    nameInput.value="";
    numberInput.value="";
    
    


});

Editbtn.addEventListener('click',()=>{
rubrica.editContactbtn(nameInput.value,numberInput.value);
rubrica.showContacts();
}

)


removeContactbtn.addEventListener('click',()=>{
  rubrica.removeContactbtn(nameInput.value);
})
