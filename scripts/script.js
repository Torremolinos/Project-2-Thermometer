const cambio =() =>{
    const celsius = parseFloat(document.getElementById('celsius').value);
    console.log(typeof(celsius));
    if(isNaN(celsius)){
        alert('Por favor, ingresa una temperatura válida')
        return;
    }
    const f = (celsius*9/5)+32;
    
    document.getElementById('f').textContent= f.toFixed;
}
