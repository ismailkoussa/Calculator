import classes from './button.module.css'

function CalButton (props){ 
return (
<button  className = {classes.normalButton}  onClick={props.handler}> 
  {props.text}
</button>
);
}
export default CalButton;