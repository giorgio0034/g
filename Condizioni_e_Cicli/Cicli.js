let v= 28;


/*
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
*/
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