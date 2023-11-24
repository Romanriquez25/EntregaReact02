import SocialButton from '../components/SocialButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Formulario';
import Alert from './Alert';

import '../App.css'


const Registro = ({valor, setValor}) => {
  
  

  return (
    <>
       <div className='contendor__Principal'>
        <div className="titulo">
          <h1>Registrate</h1>
        </div>
        <div className="social"> 
        <SocialButton  
          facebook="https://img.icons8.com/ios/50/000000/facebook-new.png" 
          gitHub="https://img.icons8.com/ios/50/000000/github.png" 
          Linkedin="https://img.icons8.com/ios/50/000000/linkedin.png"  className="icon"/>
        </div>
        <div className="subtitle">
          <h2>O registrate con tu mail</h2>
        </div>
          <Formulario  setValor={setValor}/>
          <div className='caja__alert'></div>
         <Alert valor={valor} setValor={setValor}/>
        </div>
       
    </>
  );
};

export default Registro;