async function getDetails() {
    let pokemon=sessionStorage.getItem("pokemon");
    const details = await $.get('https://pokeapi.co/api/v2/pokemon/'+pokemon+'/');
    
    let html = '';

        html += `<div>
        <h1>${details.name}</h1>
        <img src="${details.sprites.front_default}"></img>
        <p>Weight: ${details.weight}</p>`

        for(const ability of details.abilities){
            html+=`<p>Ability: ${ability.ability.name}</p>`
        }
        html+=`<button onClick="location.href='index.html'">Pokedex</button>
        </div>`
    $('#details')[0].innerHTML = html;
};

getDetails();