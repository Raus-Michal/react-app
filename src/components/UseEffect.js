import "./UseEffect.css";
import { useEffect, useState } from "react"; // import nativních funkcí useEffect a useState z reactu


const UseEffect=()=>{

const [klik1,setKlik1] = useState(0); // nastavení default hodnoty na 0 kliků klik1
const [klik2,setKlik2] = useState(0); // nastavení default hodnoty na 0 kliků klik2
const [provedeneAkce,setProvedeneAkce] = useState("");


// 1.
useEffect(()=>{
console.log("Holý use effect");
}); // tento useEffect se spustí při každém rendrování komponenty

// 2.
useEffect(()=>{
console.log("Holý use effect s cleana function");
return ()=>{
// tohle je cleana function, ta se nespustí při prvním rendrování komponenty, až při dalším redrování se spustí, ale ještě před tím než se spustí zbylý obsah useEfectu !!!
console.log("Tady by se provedla clean function");
};

}); // tento useEffect se spustí při každém rendrování komponenty

// 3.
useEffect(()=>{
let text = `${provedeneAkce}, useEffect s [] bez další hodnoty`;
setProvedeneAkce(text); // nastaví novou hodnotu proměnné a znovu rendruje komponentu
},[]); // tento useEffect se spustí pouze při prvním rendrování komponenty

// 4.
useEffect(()=>{
let text = `${provedeneAkce}, useEffect s [klik1]`;
setProvedeneAkce(text); // nastaví novou hodnotu proměnné a znovu rendruje komponentu
},[klik1]); // tento useEffect se spustí při změně hodnoty proměnné klik1

// 5.
useEffect(()=>{
let text = `${provedeneAkce}, useEffect s [klik2]`;
setProvedeneAkce(text); // nastaví novou hodnotu proměnné a znovu rendruje komponentu
},[klik2]); // tento useEffect se spustí při změně hodnoty proměnné klik2



const zvysit_klik1=()=>{
let plus=klik1 + 1; // zvýší klik o 1

setKlik1(plus); // nastaví novou hodnotu klik1

};

const zvysit_klik2=()=>{
let plus=klik2 + 2; // zvýší klik o 2

setKlik2(plus); // nastaví novou hodnotu klik2

};


return (
<div className="kontajner">

<div>
<p>Provedené akce useEffect</p>
<p className="akce">{provedeneAkce}</p>
</div>

<div className="flex">
<div>
<p>Počitadlo 1</p>
<p>hodnota:{klik1}</p>
<button className="butt" type="button" onClick={zvysit_klik1}>Zvyš hodnotu o 1</button>
</div>

<div>
<p>Počitadlo 2</p>
<p>hodnota:{klik2}</p>
<button className="butt" type="button" onClick={zvysit_klik2} >Zvyš hodnotu o 2</button>
</div>
</div>


</div>

);

};

export default UseEffect;