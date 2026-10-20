import { useEffect, useState } from 'react';
import api from '../api';

export default function Dashboard() {
    const [message, setMessage] = useState('Проверяю доступ...');
    const [error, setError] = useState('');

    useEffect(() => {
        const loadProtectedData = async () => {
            try {
                const response = await api.get('protected/');
                setMessage(`${response.data.message} — ${response.data.user}`);
            } catch {
                setError('Сначала войдите в систему.');
                setMessage('Нет доступа');
            }
        };

        loadProtectedData();
    }, []);

    return (
        <div>
            <h2>Панель управления</h2>
            <p>{message}</p>
            {error && <p>{error}</p>}
        </div>
    );
}
