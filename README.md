# Bloomme

This project is a backend built with Node.js, Express, TypeScript, and Sequelize.

## Tabla de Contenidos

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Running the Server](#running-the-server)
5. [Project Structure](#project-structure)
6. [Endpoints](#endpoints)
7. [Technologies Used](#technologies-used)

## Requirements

Ensure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Installation

Clone the repository and run the following commands:

```bash
git clone <URL-del-repositorio>
cd <project-name>
npm install
```

If you're using yarn:

```bash
yarn install
```

## Configuration

Create a .env file at the root of the project.

Add the necessary environment variables, such as database configuration. Example:

```plaintext
DB_HOST=            # Database server address (e.g., localhost)
DB_PORT=            # Database port (e.g., 5432 for PostgreSQL)
DB_NAME=            # Database name
DB_USER=            # Database user
DB_PASSWORD=        # Database password
GEMINI_API_KEY=     # API key for external Gemini integration
JWT_SECRET=         # Secret key for signing JWT tokens
PORT_INDEX=         # Port where the server will run (e.g., 3000)
```

## Running the Server

To run the server in development mode:

```bash
npm run dev
```

If using yarn:

```bash
yarn dev
```

To build and run in production:

```bash
npm run build
npm start
```

## Project Structure


```plaintext
├── src
│   ├── config        # Configuration (Database, etc.)
│   ├── controllers   # Route controllers
│   ├── models        # Sequelize models
│   ├── routes        # Express routes
│   ├── services      # Business logic
│   └── index.ts      # Main file
├── .env.example      # Sample .env file
└── README.md         # Project documentation
```

## Endpoints

    -   GET /api/users - Get all users.
    -   POST /api/users - Create a user.
    -   GET /api/users/:id - Get a user by ID.

## Technologies Used

    -   Node.js - JavaScript runtime environment
    -   Express - Web framework for Node.js
    -   TypeScript - JavaScript superset with static typing
    -   Sequelize - ORM for working with SQL databases
