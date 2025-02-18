import "./WriteNamesAndDeleteName.css";
import data from "../data/data"; // import souboru data.js, kde je pole objektů data
import { useState } from "react"; // importuje z reactu nativní funkci useState

const WriteNamesAndDeleteName=()=>{

const [newData,setNewData]=useState(data); // destruction objektu data pomocí nativní react funkce useState [nový název objektu,název funkce která bude měnit hodnotu objektu]=useState(default hodnota objektu)

const vymaz_zaznam=(id)=>{
// funkce zajistí vymazání řádku záznamu, který má id, které bylo zasláno do funkce

const myFilter=newData.filter((oneLine)=>{
return oneLine.id !== id; // myFilter bude obsahovat všechny záznamy, kromně toho, který má id == tomu id, které bylo zasláno do funkce
}); // odfiltrování záznamu, který má id, které bylo zasláno do funkce

setNewData(myFilter); // funkce nastaví objekt newData na novou hodnotu myFilter a udělá refresh obsahu komponenty

};

const AllDelete=()=>{
// funkce vymaže všechny záznamy do posledního
setNewData([]); // funkce nastaví objekt newData na novou hodnotu [], tedy hodnotu prázdného pole a nebude tedy obsahovat žádné záznamy a udělá refresh komponenty
};

return (
<div>
<h2>Všechny name a description z pole objektů data ze soboru data/data.js</h2>
<p>Tlačítkem delete se vymaže položka ke ktreé je tento button přiřazen.</p>
{ // závorky {} umožňují v těle return používat JavaScript
newData.map((oneLine)=>{
return <div className="box-polozky" key={oneLine.id}>
<p>name:{oneLine.name}</p>
<p>description:{oneLine.description}</p>
<div className="box-button">
<button type="button" onClick={ ()=>{vymaz_zaznam(oneLine.id);}  /* zápis spuštění funkce po kliknutí na tlačítko tak, aby do ní byla zaslána hodnota id a přitom se automaticky nespustila při načtení stránky */ }>delete</button>
</div>
</div>
})

}

<div className="box-button">
<button type="button" onClick={AllDelete}>Vymazat vše</button>
</div>

</div>
);

};

export default WriteNamesAndDeleteName;