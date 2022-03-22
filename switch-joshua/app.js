const getPokemon = async (enlace) => {
  const respuesta = await fetch(enlace);
  if (respuesta.status == 200) {
    const data = await respuesta.json();
    mostrarPokemon(data);
  } else {
    alert("Error: El codigo de respuesta es " + respuesta.status);
  }
};

const mostrarPokemon = (pokemon) => {
  let color;
  switch (pokemon.types[0].type.name) {
    case "grass":
      color = "#38b000";
      break;
    default:
      alert("No coincide el tipo del pokemon");
      color = "white";
  }

  const html = `
  <div>
  <p style="color:${color}">${pokemon.species.name}</p>
  </div>
  `;

  document.querySelector("#contenedor").innerHTML += html;
};

getPokemon("https://pokeapi.co/api/v2/pokemon/1");
