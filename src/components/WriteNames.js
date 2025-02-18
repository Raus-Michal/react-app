import "./WriteNames.css";
import data from "../data/data"; // import souboru data.js, kde je pole objektů data

const WriteNames=()=>{
return (
<div>
<h2>Všechny name a description z pole objektů data ze soboru data/data.js</h2>

{ // závorky {} umožňují v těle return používat JavaScript

data.map((oneLine)=>{
return <div className="box-polozky" key={oneLine.id}>
<p>name:{oneLine.name}</p>
<p>description:{oneLine.description}</p>
</div>
})

}

</div>
);

};

export default WriteNames;