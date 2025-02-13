import "./UseState.css";

import { useState } from "react";

const UseState=()=>{


const [new_title,newTitle] = useState("Původní title"); /* const [Název Funkce , Název funkce pro změnu proměnné] = useState( Default hodnota proměnné ); useState se nastavuje pomocí destructing pole  */

const zmen_nadpis=()=>{

newTitle("Nové title"); /* spuštění funkce změní hodnotu proměnné new_title a udělá refresh komponenty - dojde k novému načtení celé komponenty */

};


const[textButton,setTextButton]= useState("Klikni a změň mi text"); // destructorng nastaví proměnnou a k ní funkci pro použití useState
const newTextButton="Jsem nový text buttonu"; // proměnná nahradí původní text

const zmen_text_button=()=>{
setTextButton(newTextButton); // změní text Buttonu a udělá refresh komponenty
};


return (
<div>
<p className="nadpis">{new_title}</p>
<button type="button" onClick={zmen_nadpis}>Změnit nadpis jedním klikem</button>

<button type="button" onClick={zmen_text_button}>{textButton}</button>

</div>
);

};

export default UseState;