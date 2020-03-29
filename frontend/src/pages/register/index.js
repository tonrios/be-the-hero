import React from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"></img>
                    <h1>Faça seu cadastro</h1>
                    <p>faça seu cadastro, dfkdsdjfgnjkfdjgbdfjkjgkdbf fgj bgjfb gsjdhfgbjfgldfbsg bgbfdgjfdgbdfjg</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="E02041" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da Ong"></input>
                    <input type="email" placeholder="E-mail"></input>
                    <input placeholder="Whatsapp"></input>
                    <div className="input-group">
                        <input placeholder="Cidade" style={{ width: "80%" }}></input>
                        <input placeholder="Up" style={{ width: "20%" }}></input>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>


                </form>
            </div>
        </div>

    )
}