import classes from './header.module.css';
import { useContext} from 'react';
import ButtonContext from '../store/button-context';
import { useEffect , useState} from 'react';

function Header () {
const buttonctx = useContext(ButtonContext);
let cont = buttonctx.content;
return (
<div className={classes.headerBody}>
    <div className={classes.cont}>
    <div className={classes.equation}><div  className={classes.textarea}>{cont}</div></div>
    <div className={classes.resultCont}> 
         <div className={classes.beforeResult}></div>
         <div className={classes.result}>
             {buttonctx.result}
         </div>
    </div>
    </div>
</div>
);
}
export default Header;