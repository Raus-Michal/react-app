import Hlavicka from "./components/Hlavicka"; // import komponenty Hlavicka
import Button from "./components/Button"; // import komponenty Button
import Alert from "./components/Alert"; // import komponenty Alert
import UseState from "./components/UseState"; // import komponenty UseState
import WriteNames from "./components/WriteNames"; // komponenta umí vypsat name a description z pole objektů data, který je v souboru data/data.js
import WriteNamesAndDeleteName from "./components/WriteNamesAndDeleteName"; // podobná komponenta jako WriteNames s tím rozdílem, že jednotlivé položky mají button na své vymazání
import ButtonProps from "./components/ButtonProps"; // komponenta, která má v sobě button, který si nechal zaslat funkci z této App hlavní komponenty

import { useEffect } from "react"; // importování nativní funkce react useEffect, tato funkce funguje tak, že jakmile se vyrendruje stránka spouští se vše co je ve funkci useEffect
// pokud bych chtěl mít importováno v komponentě useState a zároveň useEffect bude zápis následující: import { useEffect, useState } from "react";

import img1 from "./img/img-1.svg"; // import svg
// import img2 from "./img/img-2.svg"; // import svg
import img3 from "./img/img-3.svg"; // import svg

const App=()=>{

useEffect( () => {
// 1.) nativní funkce REACT, která se spustí po vyrendrování komponenty = spouští se až nakonec, jako poslední z posledního
// 2.) pokud je součástí komponenty nativní funkce REACTu useState, tak pokud se spustí useState, dojde k refrešnutí komponenty a pak se spustí useEffect

const input_useEffect=document.getElementById("input_useEffect"); // načte HTML element input type="text"

const p_useEffect=document.getElementById("input_useEffect"); // načte HTML element p

if(input_useEffect&&p_useEffect)
{
let value_input=input_useEffect.value; // načte value input
p_useEffect.innerText=value_input; // přepíše text HTML element P na value input type=text
}

/*
Pokud bychom chtěli, aby se useEffect spustil pouze 1x a při použití useState (kdy dojde k znovu vyrendrování komponenty) se už znova nespustil, bude vypadat jeho zápis takto:

useEffect( () => {

    // obsah useEffect, který se spustí pouze 1x, pokud by byl v komponentě použit useState, díky ,[] na konci této funkce, již se znovu nespustí

},[]);

*/

});

const buttons=[
{
id:1,
src:img1, // vloží importovaný img1
title:"opice"
},
// {
// id:2,
// src:img2, // vloží importovaný img2
// title:"slon"
// },
{
id:3,
src:img3, // vloží importovaný img3
title:"kočka"
}
];

const myAlert=()=>{
// tato funkce udělá jen alert HELLO, ale posílá se pomocí props do komponenty ButtonProps
alert("HELLO");
};

const pole_title=buttons.map((muj_search)=>{
// vestavěná funkce map projde pole buttons a vrací nové pole pole_title s prvky původného pole
return muj_search.title; // musé mít return a tímto z pole buttons vrací každé title z objektu 
});  // výsledek bude nové pole s všema title všech objektů: pole_title=["opice","slon","kočka"];

console.log("pole_title="+pole_title);

const nechci_button=2; // proměnná určuje číslo id buttonu, který bude odfiltrován == vymazán, tak že nubude v novém filtrovaném poli
const pole_filtrovane=buttons.filter((muj_delete)=>{
return muj_delete.id !== nechci_button; // musí mít return - vrátí všechny objekty, kromně objektu s id===nechci_button
});  // výsledek bude nové pole s všemi stávajícími objekty, kromě objektu s id, které se rovná proměnné nechci_button

console.log("pole_filtrovane="+pole_filtrovane);


return (
<div>
<Hlavicka /> {/* Vložení komponenty Hlavička */}

<div className="flex">  {/* css třídy se v Reactu místo class= vkládají className= , pro App.js jsou css styly v index.css! */}

<Button img={buttons[0].src} title={buttons[0].title} /> {/* posíláme PROPS img a title do komponenty Button img="img/img-0.svg" title="opice" */}

<Button img={buttons[1].src} title={buttons[1].title} /> {/* posíláme PROPS img a title do komponenty Button img="img/img-1.svg" title="slon" */}

<Alert />

<UseState />

<div>
<input id="input_useEffect" type="text" value="Hodnota Input type text" /> { /* Pokud chceme zachytit cokoli z HTML elementu, musíme to udělat přes useEffect, protože ten se spustí až po vyrendrování, pokud bychom se pokusili cokoli z HTML elementu zachytit bez useEffect, byla by hodnota null, protože tento HTML objekt by ještě nebyl vyrendrován */ }
<p id="p_useEffect">value input?</p>
</div>


</div>

<WriteNames /> {/* komponenta umí vypsat name a description z pole objektů data, který je v souboru data/data.js */}

<WriteNamesAndDeleteName /> {/* komponenta umí vypsat name a description z pole objektů data, který je v souboru data/data.js a tlačítkem delete odstranit položku, která je s tímto buttonem spojena */}

<div>
<ButtonProps xxx={myAlert} /> {/* Pomocí props pošleme do komponenty ButtonProps funkci myAlert() */}
</div>

</div>
);

};

export default App;