import React, { useState } from 'react';

export default function Login({ lista }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envie os dados para o método store
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome,
                email,
                password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Lida com a resposta do servidor
            console.log(data);
        })
        .catch(error => {
            // Lida com erros
            console.error(error);
        });
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Login Renderizado</h1>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                <form className="mt-4" onSubmit={handleSubmit}>
                    <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                    <input type="text" id="nome" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={nome} onChange={e => setNome(e.target.value)} />
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 mt-4">Email:</label>
                    <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={email} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 mt-4">Senha:</label>
                    <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Enviar</button>
                </form>
            </div>
        </div>
    );
}