// src/components/Login.tsx
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import { login } from '../../services/authService';


const Login: React.FC = () => {

    const [email, setEmail]         = useState<string>('');
    const [password, setPassword]   = useState<string>('');
    const [error, setError]         = useState<string>('');
    const navigate  = useNavigate();


    // Vérifier si l'utilisateur est déjà connecté
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/app", { replace: true });
        }
    }, [navigate]);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simulez une connexion réussie
        if (email === 'test@example.com' && password === 'password') {
            console.log('Connexion réussie');

            let _token  = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NDAwNzYxMTgsImV4cCI6MTc3MTYxMjExOCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.w3pq3f5PGFASRtjOq-vlcF1CjMda7AR1xr9-K6ezvBo';

            localStorage.setItem("token", _token);
            navigate('/app'); // Redirige vers /app
        } else {
            console.log('Email ou mot de passe incorrect');
        }


        /*
            e.preventDefault();
            setError("");

            try {
                const { token } = await login(email, password);
                localStorage.setItem("token", token);
                navigate("/app");
            } catch (err: any) {
                setError(err.message);
            }
        */

    };

    return (
        <>
            <div className="min-h-screen w-[30%] flex items-center justify-center bg-white">
                <div className="bg-white p-8 w-full max-w-md">
                    <div className="flex items-center justify-center mb-[20px]">
                        <img src="/img/logo.png" alt="logo" className="w-[70px]" />
                    </div>
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Connexion</h2>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Adresse email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-200  focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-transparent"
                                placeholder="Entrez votre email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-700 focus:border-transparent"
                                placeholder="Entrez votre mot de passe"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-600 text-white py-2 px-4 hover:bg-teal-700 transition duration-300"
                        >
                            Se connecter
                        </button>
                    </form>
                    <div className="mt-6 text-right">
                        <p className="text-sm text-gray-600">
                            Vous avez oublie votre password ?{' '}
                            <a href="/signup" className="text-blue-600 hover:underline">
                                Recuperer
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen w-[70%] flex items-center justify-center border-l border-gray-200">
                <img src="/img/6184159_3094350.svg" className="max-h-full" alt="login bg"/>
            </div>
        </>
    );
};

export default Login;