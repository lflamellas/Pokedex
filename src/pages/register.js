import axios from "axios"
import {useHistory} from "react-router-dom"
import React, {useState, useRef} from 'react'
import * as yup from 'yup'
import "../styles/register.css"


const Register = () => {

    let history = useHistory()
    const input = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`https://pokedex20201.herokuapp.com/users/`, {username:input.current.value})
            .then(() => {
                console.log("BUGZAO")
                localStorage.setItem('app-token', JSON.stringify(input.current.value))
                history.push('/')
            })
    }

    return(
        <div>
            <h1 className="registerTitle">Cadastro</h1>
            <form className="registerForm" onSubmit={handleSubmit}>
                <input placeholder="Digite seu usuário" ref={input} name="username"/>
                <input placeholder="Digite sua senha" type="password"/>
                <input placeholder="Confirme sua senha" type="password"/>
                <button type="submit">Cadastrar</button>
                <button onClick={() => history.push('/')}>Voltar</button>
            </form>
        </div>
    );
}

export default Register;