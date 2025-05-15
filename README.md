# Managed Object Storage Web Application

A web application with a TypeScript-based frontend and backend, using React and Express respectively, with SQLite as the database.

## Documentation

- [API Documentation](server/API.md) - Detailed API endpoint documentation
- [Development Guide](DEVELOPMENT.md) - Setup and development instructions

## Prerequisites

- Node.js (v18 or later)
- npm or yarn

## Project Structure

```
managedObjectStorage/
├── client/                 # Frontend React application
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
├── server/                 # Backend Express application
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│   └── data/              # SQLite database files
└── README.md
```

## Quick Start

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd managedObjectStorage
   ```

2. Install dependencies:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:

   - Create `.env` files in both `server` and `client` directories
   - See [Development Guide](DEVELOPMENT.md) for required variables

4. Start the application:

   ```bash
   # Start the server (in server directory)
   npm run dev

   # Start the client (in client directory)
   npm start
   ```

The application will be available at:

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Features

- Object storage management
- Metadata support
- RESTful API
- TypeScript support
- SQLite database
- React frontend
- Express backend

## Available Scripts

### Server

- `npm run dev`: Start the development server
- `npm run build`: Build the TypeScript code
- `npm start`: Start the production server

### Client

- `npm start`: Start the development server
- `npm run build`: Build the production bundle
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

## Contributing

Please read our [Development Guide](DEVELOPMENT.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the ISC License.
