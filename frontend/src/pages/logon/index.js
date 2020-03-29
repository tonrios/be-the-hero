import React from 'react';
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    return (

        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"></img>
                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"></input>

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogOut size={16} color="E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"></img>
        </div>
    )
}
