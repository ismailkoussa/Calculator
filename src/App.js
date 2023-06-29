 
import CalButton from './components/button';
import SubmitButton from './components/submitbutton';
import ButtonContext from './store/button-context';
import { useContext } from 'react';
import Calculator from './layout/calculator'
import classes from './App.module.css';
   
function App() {
  const data = [
    <CalButton />,
    <CalButton />,
    <CalButton />,
    <CalButton />,
    <CalButton />,
    <CalButton />,
    <CalButton/>,
    <CalButton />,
    <CalButton />,
    <CalButton />,
    <CalButton />,
    <CalButton />,
    <CalButton />,
    <CalButton />,
    <CalButton />,
    <CalButton />,
    <CalButton />,
    <CalButton />, 
    <SubmitButton />
  ]
 
  const buttonctx = useContext(ButtonContext);
  buttonctx.buttons = [...data];
  return (
   <div className={classes.container}>
   <div>
    <Calculator />
    </div>
</div>
    );}
export default App;
