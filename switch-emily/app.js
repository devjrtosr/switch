const traerPokemon = async()=>{
    respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await respuesta.json();
    console.log(data);    
    
    let color;
    switch (color) {
        case "006400":
            color= "#006400";
            break;
        case "38b000":
            color= "#38b000";
            break;
        default:
            color=console.log('no se encontro el color');
            break;
    }
    let nombrePokemon= `<div style="color:${color}"> 
                                <p class="nombrePokemon">${data.name}</p> 
                            </div>`;
     
    document.querySelector("#contenedor").innerHTML=nombrePokemon;
};
traerPokemon();