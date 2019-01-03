async function getlist() {
    const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/');

    let html = '';
    for(const pokemon of pokelist.results) {
        html += `<div>
        <p>${pokemon.name} <button onClick="location.href='details.html?id=${pokemon.name}'">Details</button></p>
        </div>`
    }

    $('#pokemons')[0].innerHTML = html;
};

getlist();