'use client'
import {useState} from 'react'
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function Cadastro() {

    const [nome, setNome] = useState('Teste')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
   
   const handleSubmit = () => {
    console.log(nome, email, pass);
    
   }

    return (
        <>
         <Header/>
        <main className="p-5">
            <h1 className="text-3xl">Cadastro {nome}</h1>
           
                <div className="flex-col gap-1 p-1 2-[300px]">
                    <label>Nome:</label>
                   <input className="border" type="text" value={nome} onChange={event => setNome(event.target.value)} />
                   
                   <label>Email:</label>
                   <input className="border" type="text" value={email} onChange={event => setEmail(event.target.value)} />

                   <label>Password:</label>
                   <input className="border" type="text" value={pass} onChange={event => setPass(event.target.value)} />

                   
                   <button onClick={handleSubmit()}  className="border bg-slate-300 ">Cadastrar</button>


                </div>
           
            </main>
            <Footer/>
        </>
    )
}