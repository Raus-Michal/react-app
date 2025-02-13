import Hlavicka from "./components/Hlavicka"; // import komponenty Hlavicka
import Button from "./components/Button"; // import komponenty Button
import Alert from "./components/Alert"; // import komponenty Alert
import UseState from "./components/UseState"; // import komponenty UseState

const App=()=>{

const buttons=[
{
id:1,
src:"img/img-0.svg",
title:"opice"
},
{
id:2,
src:"img/img-1.svg",
title:"slon"
},
{
id:3,
src:"img/img-2.svg",
title:"kočka"
}
];


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

</div>


</div>
);

};

export default App;