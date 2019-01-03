"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        let pokemon = sessionStorage.getItem("pokemon");
        const details = yield $.get('https://pokeapi.co/api/v2/pokemon/' + pokemon + '/');
        let html = '';
        html += `<div>
        <h1>${details.name}</h1>
        <img src="${details.sprites.front_default}"></img>
        <p>Weight: ${details.weight}</p>`;
        for (const ability of details.abilities) {
            html += `<p>Ability: ${ability.ability.name}</p>`;
        }
        html += `<button onClick="location.href='index.html'">Pokedex</button>
        </div>`;
        $('#details')[0].innerHTML = html;
    });
}
;
getDetails();
