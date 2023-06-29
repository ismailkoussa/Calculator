import { createContext, useState } from 'react';

const ButtonContext = createContext({
  buttons: [],
  totalbuttons: 0,
  values: [], 
  content: " ",
  setContent: () => {},
  removeContent: () => {},
  result: 0,
  setResult: () => {}
});

const vals = [
  "C" ,"Pw" ,"%" ,"/" , "7" ,"8" ,"9" , "*" ,"4" ,"5"
   ,"6" , "-" ,"1" ,"2" ,"3" , "+" ,"0" , ".", "=" 
   ];

export function ButtonContextProvider(props) {
  const [userbuttons, setUserbuttons] = useState([]);
  let [contentValue, setContentValue] = useState(" ");
  const [valscontent, setvalscontent] = useState(vals);
  let [result, setResult] = useState(0);

  function setContent(value) {
    setContentValue(contentValue + value);
  }

  function removeContent (){
    let val = " ";
    setContentValue(val);
  }

  function setresult(value) {
    setResult(value);
  }
  
  const context = {
    buttons: userbuttons,
    totalbuttons: userbuttons.length,
    values: vals,
    content: contentValue,
    setContent: setContent,
    removeContent: removeContent,
    result: result,
    setResult: setresult
  };
  return (
    <ButtonContext.Provider value={context}>
      {props.children}
    </ButtonContext.Provider>
  );
}
export default ButtonContext;