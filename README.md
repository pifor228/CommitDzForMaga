# CommitDz

Учебный веб-проект: интерфейс на React и TypeScript, серверное API на Django REST Framework. Сейчас в интерфейсе есть главная страница, форма входа и страница 404. API поддерживает регистрацию пользователя и выдачу JWT-токенов.

## Технологии

- Frontend: React, TypeScript, Vite, React Router, Axios
- Backend: Django, Django REST Framework, Simple JWT
- База данных для разработки: SQLite

## Запуск проекта в Windows

Откройте два отдельных терминала из корневой папки проекта.

### 1. Backend

Создайте и активируйте виртуальное окружение PowerShell:

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

Установите серверные зависимости:

```powershell
python -m pip install Django djangorestframework djangorestframework-simplejwt django-cors-headers requests
```

Примените миграции и запустите сервер:

```powershell
python manage.py migrate
python manage.py runserver
```

API будет доступно по адресу `http://127.0.0.1:8000/api/`.

### 2. Frontend

```powershell
cd react
npm install
npm run dev
```

Откройте адрес Vite, который появится в терминале (обычно `http://localhost:5173/`).

## Страницы интерфейса

- `/` — главная страница с панелью управления. Карточки пока не отображаются.
- `/Login` — форма входа; при успешном входе access-токен сохраняется в `localStorage`.
- Любой неизвестный адрес — страница 404.

## API

Все адреса ниже указаны относительно `http://127.0.0.1:8000/api/`:

| Метод | Адрес | Назначение |
| --- | --- | --- |
| `POST` | `register/` | Регистрация пользователя |
| `POST` | `token/` | Получение JWT-токенов по логину и паролю |
| `POST` | `token/refresh/` | Обновление access-токена |

Пример запроса входа:

```json
{
  "username": "имя_пользователя",
  "password": "пароль"
}
```

## Проверки frontend

Из папки `react`:

```powershell
npm run build
npm run lint
```

## Важно

Настройки сервера предназначены для локальной разработки. Перед публикацией проекта настройте секретный ключ, `DEBUG`, разрешённые хосты и CORS для своего окружения. Не добавляйте секреты и локальные файлы окружения в Git.

## мне помогал ии AI-ASSISTED: Gemini

при разработке проекта использовал ИИ-ассистент 
помощь в структурировании комитов и соблюдении GIT-соглашений
настройка базовой маршрутизации и REST API интерграции
Выявление и исправление мелких ошибок и отпечаток в коде