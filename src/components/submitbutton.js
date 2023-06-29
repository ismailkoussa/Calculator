import classes from './submitbutton.module.css';
function SubmitButton (props){
    return (
    <button  className={classes.submitButton}  onClick={props.handler} >
      {props.text}
    </button>
    );  
    }
    export default SubmitButton;