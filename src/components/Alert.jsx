const Alert = ({valor,setValor}) => {
   
    return (
        <>
        {valor ? <div className="alert alert-warning" role="alert">
            Todos los campos son obligatorios y chequea que las contraseñas coincidan
        </div> : <div className="alert alert-success"> Formulario Enviado </div>}
        </>
    );
};

export default Alert;