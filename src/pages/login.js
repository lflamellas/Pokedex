import axios from "axios"
import {useHistory} from "react-router-dom"
import React, {useState, useRef} from 'react'
import * as yup from 'yup'
import '../styles/login.css'

const Login = () => {

    let history = useHistory()
    const input = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        if(input.current.value === "") return
        axios.get(`https://pokedex20201.herokuapp.com/users/${input.current.value}`)
            .then(() => {
                localStorage.setItem('app-token', JSON.stringify(input.current.value))
                history.push('/main')
            })
            .catch((error) => {
                alert(`O usuário "${input.current.value}" não existe! CADASTRE-SE!`)
            })
    }

    return(
        <div>
            <h1 className="loginTitle">Bem vindo a sua Pokédex!</h1>
            <form className="loginForm" onSubmit={handleSubmit}>
                <input className="usernameInput" placeholder="Digite seu usuário" type="text" name="username" ref={input} required/>
                <button className="loginBtn" title="Entrar" type="submit">Entrar</button>
                <button className="registerBtn" title="Cadastrar" onClick={() => history.push('/cadastro')}>Registrar</button>
            </form>
        </div>
    );
}

export default Login;