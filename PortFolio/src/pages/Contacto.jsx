import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import  "../styles/Contacto.css"
  

function Contacto() {
    // Definir el estado para cada campo del formulario
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        message: '',
    });


    const [errors, setErrors] = useState({
        name: '',
        lastName: '',
        email: '',
        message: '',
    });

    // Manejador de cambios para los inputs
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    // Validaciones de los campos
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateInput = (input) => {
        if (!input.trim()) return false;
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ'.,:!"¿?]+( [A-Za-záéíóúÁÉÍÓÚñÑ'.,:!"¿?]+)*$/;
        return regex.test(input);
    };

    // Validar todos los campos antes de enviar el formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        let formErrors = { ...errors };

        if (!validateEmail(formData.email)) {
            formErrors.email = 'El correo electrónico no es válido. Ingrese un correo válido, por ejemplo: email@ejemplo.com';
        } else {
            formErrors.email = '';
        }

        if (!validateInput(formData.name)) {
            formErrors.name = 'Nombre no válido. El campo del nombre no puede estar vacío o iniciar con espacios. Ingrese un nombre válido, por ejemplo: "Lionel Andrés".';
        } else {
            formErrors.name = '';
        }

        if (!validateInput(formData.lastName)) {
            formErrors.lastName = 'Apellido no válido. El campo del apellido no puede estar vacío o iniciar con espacios. Ingrese un apellido válido, por ejemplo: "Messi".';
        } else {
            formErrors.lastName = '';
        }

        if (!validateInput(formData.message)) {
            formErrors.message = 'Mensaje no válido. El campo del nombre no puede estar vacío o iniciar con espacios.';
        } else {
            formErrors.message = '';
        }

        // Actualizar los errores en el estado
        setErrors(formErrors);

        // Si no hay errores, enviamos el formulario
        if (!Object.values(formErrors).some((error) => error !== '')) {
            console.log('Formulario enviado:', formData);
            alert('¡Mensaje enviado!');
        }
    };

    return (
        <div className="containerForm">
            <div className="form-content">
                <h2 id="titleForm" className="py-2">¡Enviame un mensaje !</h2>
                <form id="registrationForm" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-field">
                            <i className="fa-solid fa-user"></i>
                            <input
                                type="text"
                                placeholder="Nombre"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.name && <span className="error">{errors.name}</span>}
                        <div className="input-field">
                            <i className="fa-solid fa-user-tag"></i>
                            <input
                                type="text"
                                placeholder="Apellido"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                        <div className="input-field">
                            <i className="fa-solid fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.email && <span className="error">{errors.email}</span>}
                        <div className="input-field">
                            <i className="fa-solid fa-pencil"></i>
                            <textarea
                                placeholder="Consulta"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        {errors.message && <span className="error">{errors.message}</span>} 
                    </div>

                    <div className="btn-field">
                        <button id="signUp" type="submit" className='btn-dark text-blue'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacto;
