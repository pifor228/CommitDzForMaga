import { Link } from 'react-router-dom';

export default function NotFound() {
    return(
        <div>
            <h2>404-страница не найдена</h2>
            <Link to="/">вернутся на главную</Link>
        </div>
    );
}
