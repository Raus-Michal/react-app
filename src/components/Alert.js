import "./Alert.css";

const Alert=()=>{

const spust_alert=()=>{
alert("klik na button ALERT");
};

return (
<div>
<button type="button" className="b1" onClick={spust_alert}>Alert</button>
</div>
);

};

export default Alert;