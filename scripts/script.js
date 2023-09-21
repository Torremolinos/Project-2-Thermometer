/*Creamos una arrow function de cambio de celsius a farenheit
con un if para que el usuario no meta nada que no sea un numero
dado que el usuario metera un numero en forma de string cambiamos ese tipo a numero.*/
const cambio =() =>{
    const celsius = parseFloat(document.getElementById('celsius').value);
    console.log(typeof(celsius));
    if(isNaN(celsius)){
        alert('Por favor, ingresa una temperatura válida')
        return;
    }
    //Creamos una constante para los farenheit que a su vez es la propia ecuacion
    const f = (celsius*9/5)+32;
    //Para terminar le decimos al html que con el id f salga el contenido redondeado a 2 cifras.
    document.getElementById('f').textContent= f.toFixed(2);
}
