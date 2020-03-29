import React, { useState } from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api'

export default function NewIncident() {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ong_id = localStorage.getItem("ongId")

    const history = useHistory();

    async function handleNewIncident(event) {
        event.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            const response = await api.post('incidents', data, {
                headers: {
                    authorization: ong_id
                }
            });
            alert("Incidente criado !");
            history.push('/profile')
        } catch{

            alert('erro no cadastro')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>faça seu cadastro, dfkdsdjfgnjkfdjgbdfjkjgkdbf fgj bgjfb gsjdhfgbjfgldfbsg bgbfdgjfdgbdfjg</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="E02041" />
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input placeholder="Tttulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input placeholder="Valor em Reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>

    )
}