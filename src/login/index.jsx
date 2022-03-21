import { useState } from 'react';
import './style.css';

export function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(e) {

        e.preventDefault()
        setEmail('')
        setSenha('')
        console.log(email)
        console.log(senha)

    }

    return (

        <>

            <form id="login" className="login" onSubmit={handleSubmit}>

                <div className="login-container">
                    <div className="sign-in">
                        <input className="sign-in-input login-email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <input className="sign-in-input login-password" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
                    </div>
                    <button className="submit-btn" type="submit">Entrar</button>
                </div>

            </form>

        </>

    )

}