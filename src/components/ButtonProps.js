import "./ButtonProps.css"

const ButtonProps=(props)=>{

return (
<div className="box-buttonProps">
<button type="button" onClick={props.xxx /* pomocí props jsem z App poslali do tohoto buttonu funkci myAlert() */}>Alert HELLO</button>
</div>
);

};

export default ButtonProps;