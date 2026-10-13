import React, {useState} from "react";
import api from '../api';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoggedIn(false);
        setIsLoading(true);

        try {
            const response = await api.post('token/', { username, password });
            if (typeof response.data.access !== 'string') {
                throw new Error('Сервер не вернул токен доступа');
            }
            localStorage.setItem('token', response.data.access);
            setIsLoggedIn(true);
        } catch {
            setError('Ошибка входа. Проверьте логин и пароль.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2>Вход в систему</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="login-username">Логин</label>
                    <input
                        id="login-username"
                        type="text"
                        autoComplete="username"
                        placeholder="Введите логин"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="login-password">Пароль</label>
                    <input
                        id="login-password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Входим...' : 'Войти'}
                </button>
                {error && <p role="alert">{error}</p>}
                {isLoggedIn && <p role="status">Вы успешно вошли.</p>}
            </form>
        </div>
    );
}