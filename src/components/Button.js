import "./Button.css";

const Button=(props)=>{

return (
<div>
<button type="button" className="but">
<img src={props.img} title={props.title} />  {/* z App jsou zaslány props */}
{props.title}
</button>
</div>
);

};

export default Button;