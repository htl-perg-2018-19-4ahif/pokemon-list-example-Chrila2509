"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getlist() {
    return __awaiter(this, void 0, void 0, function* () {
        const pokelist = yield $.get('https://pokeapi.co/api/v2/pokemon/');
        let html = '';
        for (const pokemon of pokelist.results) {
            html += `<div>
        <p>${pokemon.name} <button onClick="location.href='details.html?id=${pokemon.name}'">Details</button></p>
        </div>`;
        }
        $('#pokemons')[0].innerHTML = html;
    });
}
;
getlist();
