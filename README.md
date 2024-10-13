# Art Gallery Web Application

## Tech Stack

This project is built using the following technologies:

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/), [Airbnb](https://github.com/airbnb/javascript), [Prettier](https://prettier.io/)
- [React-router v6](https://reactrouter.com/en/main)
- [Tailwind CSS](https://v1.tailwindcss.com/)

## Local Setup

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Steps to Setup Locally

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd <repository-name>
   ```
2. **Install Dependencies**:
   ```
   npm install
   ```
3. **Set Up Environment Variables**:
   ```
   mv .env.example .env
   ```
4. **Run the Development Server**:
   ```
   npm start
   ```
5. **Open the Application**:
   Navigate to http://localhost:3000.

## About

App uses local storage to prefetch a bunch of Gallery Objects from the [Rijksmuseum API](https://data.rijksmuseum.nl/object-metadata/api/), only a subset is displayed at a time.
That way we minimize the load time and reduce the amount of API requests.

App is easily scalable, there is room to add more packages such as Redux, Jest, etc.

Another option is to add a Docker environment and a Node or Express backend for implementing Log files, Rate limiting, Concealing the API key, Adding users and user authentication, Validations, etc.
