
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro';
import { useState } from 'react';

function App() {

  const [valor, setValor] = useState(true);
  
 
  return (
    <>
       <Registro valor={valor} setValor={setValor} />
       
    </>
  );
};

export default App;