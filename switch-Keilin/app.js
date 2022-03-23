const contenedor = document.querySelector("#contenedor");
const cantidadPokemons = 16;
const crearPokemon = async () => {
  for (let i = 1; i <= cantidadPokemons; i++) {
    let aleatorio = Math.floor(Math.random() * (898 - 1) + 1);
    await traerPokemon(aleatorio);
  }
};
const traerPokemon = async (num) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
  const respuesta = await fetch(url);
  const pokemons = await respuesta.json();
  console.log(pokemons);
  let color;
  switch (pokemons.types[0].type.name) {
    case "normal":
      color = "#A8A77A";
      break;
    case "fighting":
      color = "#C22E28";
      break;
    case "flying":
      color = "#A98FF3";
      break;
    case "poison":
      color = "#A33EA1";
      break;
    case "ground":
      color = "#E2BF65";
      break;
    case "rock":
      color = "#B6A136";
      break;
    case "bug":
      color = "#A6B91A";
      break;
    case "ghost":
      color = "#735797";
      break;
    case "steel":
      color = "#B7B7CE";
      break;
    case "fire":
      color = "#EE8130";
      break;
    case "water":
      color = "#6390F0";
      break;
    case "grass":
      color = "#7AC74C";
      break;
    case "electric":
      color = "#F7D02C";
      break;
    case "psychic":
      color = "#F95587";
      break;
    case "ice":
      color = "#96D9D6";
      break;
    case "dragon":
      color = "#6F35FC";
      break;
    case "dark":
      color = "#705746";
      break;
    case "fairy":
      color = "#D685AD";
      break;
    default:
      console.log("No se encontró el color");
      break;
  }
  let contenidoPokemon = "";
  contenidoPokemon = `<div class="tarjeta" style="background-color:${color}">
                          <img src="${pokemons.sprites.front_default}" alt="${pokemons.name}">
                          <p><b>Identificador: </b> ${pokemons.id}</p>
                          <p><b>Nombre:</b> ${pokemons.name}</p>
                          <p><b>Tipo:</b> ${pokemons.types[0].type.name}</p>
                        </div>`;
  contenedor.innerHTML += contenidoPokemon;
};
crearPokemon();
