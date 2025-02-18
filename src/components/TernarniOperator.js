import "./TernarniOperator.css";
import { useState } from "react";


const TernarniOperator=()=>{

const [error,setError] = useState(true);

return (
<div className="kontys">

<h2>Ukázky jak funguje ternární operátor v return komponentě</h2>

{
// pouze pomocí ternárního operátoru můžeme vkládat podmínku do části return v komponentě

error ? <p>promenna error je true</p> : <p>promenna error je false</p>

}

{
// můžeme udělat i více řádkovou odpověď, více bloků anebo celou stránku. Pozor - v jednom bloku {} může být pouze jeden ternální výraz
error ? <div>
<p>promenna error je true</p>
<p>Další řádek</p>
</div> : <div>
<p>promenna error je false</p>
<p>Další řádek</p>
</div>
}


{
error && <p>Je chyba</p> // jakmile je proměnná error===true, vykoná se část za operátorem &&
}

{
error || <p>Není chyba</p> // jakmile je proměnná error===false, vykoná se část za operátorem ||
}

<div>
<button type="button" onClick={()=>{setError(!error);}}>Měním chybu na nechybu a opačně</button>
</div>


</div>
)

};


export default TernarniOperator;

