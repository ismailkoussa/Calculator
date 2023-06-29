import classes from './buttonlist.module.css';
import CalButton from "./button";
import SubmitButton from './submitbutton';
import { useContext} from 'react';
import ButtonContext from '../store/button-context';
 
function CalButtonList() { 
  const buttonctx = useContext(ButtonContext);
    return (
        <div className={classes.listBody}> 
           <div className={classes.cont}>
         <ul className={classes.listStyle}>
      {buttonctx.buttons.map((CalButtonItem) => ( //passing through each button 

     ( CalButtonItem.type == CalButton) ? //checking if it's a submit button or not
     <CalButton text = { buttonctx.values[ buttonctx.buttons.indexOf(CalButtonItem)]} //filling buttons with 
     handler={() => { //function to be executed on submit                            //the values given from buttonctx.content
      switch (buttonctx.values[ buttonctx.buttons.indexOf(CalButtonItem)]) {//switch button's value
        case 'C':
          buttonctx.removeContent();
          buttonctx.setResult(0); 
          break;
        case 'Pw':
          const ope = "**";
          buttonctx.setContent(ope);
          break;  
        default:
          buttonctx.setContent(buttonctx.values[ buttonctx.buttons.indexOf(CalButtonItem)])  
       }
     }}/> 
      : <SubmitButton text = { buttonctx.values[ buttonctx.buttons.indexOf(CalButtonItem)]}
      handler={(valxxxx) => {
        try { //throw an exception if an error has occurred
        valxxxx = buttonctx.content;
        buttonctx.setResult(Math.round( eval(valxxxx) * 10000000)/10000000); //the result of operation
        } catch(e) {buttonctx.setResult(String(e));}   
      }} />    
      ) 
      )}
    </ul>
       </div>
        </div>  
    );    
      }
export default CalButtonList;