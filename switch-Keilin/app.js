const contenedor = document.querySelector("#contenedor");
const traerPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/1";
  const respuesta = await fetch(url);
  const pokemons = await respuesta.json();
  console.log(pokemons);
  let color;
  switch (pokemons.types[0].type.name) {
    case "grass":
      color = "greenyellow";
      break;
    default:
      alert("No se encontró el color");
      break;
  }
  let contenidoPokemon = "";
  contenidoPokemon += `<div>
                          <p style="background-color:${color}">${pokemons.name}</p>
                        </div>`;
  contenedor.innerHTML = contenidoPokemon;
};
traerPokemon();
