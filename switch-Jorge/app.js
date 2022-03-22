let tipocolor; 

const cantidadPokemon = 10; 
const contenedor = document.querySelector('#contenedor');

const crearPokemon = async () =>{
    for(let i = 0; i < 10; i++){
        let numeroRandom = Math.floor(Math.random() * (898 - 1) + 1)
        await obtenerpokemon(numeroRandom);
    }
}

const obtenerpokemon = async (pokemonID) => {
    const respuesta =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    const pokemon = await respuesta.json();
    crearDiv(pokemon);

};

const crearDiv = (pokemon) => {
    const tipos = pokemon.types.map((tipo) => tipo.type.name);
    pintarDiv(tipos[0]);

    let html=`
        <div style="background: ${tipocolor};">
            <img src="${pokemon.sprites.front_default}"/>   
            <p>${pokemon.name}</p>
        </div>
    `;

    contenedor.innerHTML += html;
    console.log(pokemon);
}

const pintarDiv = (color) => {
    switch (color){
       case 'grass':
           tipocolor = '#80ed99'; 
           break;
       case 'normal':
           tipocolor = '#a5a58d';
           break;
       case 'fire':
           tipocolor = '#ca6702';
           break;
       case 'Water':
           tipocolor = '#219ebc';
           break;
       case 'electric':
           tipocolor = '#ffbe0b';
           break;
       case 'ice':
           tipocolor = '#8ecae6';
           break;
       case 'fighting':
           tipocolor = '#ae2012';
           break;
       case 'poison':
            tipocolor = '#7b2cbf';
            break;
      case 'ground':
            tipocolor = '#ddbea9';
            break;
      case 'flying':
            tipocolor = '#e0aaff';
            break;
      case 'psychic':
          tipocolor = '#ff87ab';
          break;
      case 'bug':
            tipocolor = '#80b918';
            break;
      case 'rock':
          tipocolor = '#d69f7e';
          break;
      case 'ghost':
          tipocolor = '#5a189a';
          break;
      case 'dragon':
          tipocolor = '#6247aa';
          break;
      case 'dark':
          tipocolor = '#343a40';
          break;
      case 'steel':
          tipocolor = '#adb5bd';
          break;
      case 'fairy':
          tipocolor = '#ffa6c1';
          break;
        default:
            tipocolor= 'white';
            break;
    }
}


crearPokemon();