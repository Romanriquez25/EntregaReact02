import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from './Alert';
import '../App.css';

const Formulario = ({  setValor, setMostrarAlert}) => {
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        contraseña: '',
        confirmarContraseña: '',
    });
    
    
    const validarFormulario = (e) => {
        e.preventDefault();

        if (
            formulario.nombre.trim() === '' ||
            formulario.email.trim() === '' ||
            formulario.contraseña.trim() === '' ||
            formulario.confirmarContraseña.trim() === ''
        ) {
            setValor(true);
            return;
        } else if (formulario.contraseña !== formulario.confirmarContraseña) {
            setValor(true);
            return;
        } else {
            setValor(false);
            setFormulario({
                nombre: '',
                email: '',
                contraseña: '',
                confirmarContraseña: '',
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario((prevFormulario) => ({
            ...prevFormulario,
            [name]: value,
        }));
    };

    return (
        <>
            <div>
                <Form onSubmit={validarFormulario}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa tu nombre"
                            name="nombre"
                            value={formulario.nombre}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingresa tu email"
                            name="email"
                            value={formulario.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            name="contraseña"
                            value={formulario.contraseña}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirmar Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirmar contraseña"
                            name="confirmarContraseña"
                            value={formulario.confirmarContraseña}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Registrate
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default Formulario;
