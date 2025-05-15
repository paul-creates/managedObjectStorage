# Development Guide

This guide provides detailed instructions for setting up and running the Managed Object Storage application in a development environment.

## Environment Variables

### Server Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Database Configuration
DATABASE_URL=./data/database.sqlite
```

### Client Environment Variables

Create a `.env` file in the `client` directory with the following variables:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:3001/api
```

## Local Development Setup

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Git

### Initial Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd managedObjectStorage
   ```

2. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. Start the server:

   ```bash
   cd server
   npm run dev
   ```

2. In a new terminal, start the client:
   ```bash
   cd client
   npm start
   ```

The application should now be running at:

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Development Workflow

### Code Structure

```
managedObjectStorage/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.tsx       # Main application component
│   │   └── index.tsx     # Application entry point
│   ├── package.json
│   └── tsconfig.json
├── server/                 # Backend Express application
│   ├── src/
│   │   ├── config/       # Configuration files
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   └── index.ts      # Server entry point
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

### Available Scripts

#### Server Scripts

- `npm run dev`: Start the development server with hot reloading
- `npm run build`: Build the TypeScript code
- `npm start`: Start the production server
- `npm test`: Run tests (not implemented yet)

#### Client Scripts

- `npm start`: Start the development server
- `npm run build`: Build the production bundle
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

### Database Management

The application uses SQLite as its database. The database file is stored in the `server/data` directory.

To reset the database:

1. Stop the server
2. Delete the `database.sqlite` file from the `server/data` directory
3. Restart the server (the database will be recreated automatically)

### Testing

Currently, no automated tests are implemented. This is planned for future development.

### Code Style

- Use TypeScript for type safety
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components and functions small and focused

### Git Workflow

1. Create a new branch for each feature or bugfix
2. Make your changes
3. Test your changes
4. Create a pull request
5. Get code review
6. Merge after approval

## Troubleshooting

### Common Issues

1. **Port already in use**

   - Check if another process is using port 3000 or 3001
   - Kill the process or change the port in the environment variables

2. **Database connection issues**

   - Ensure the `data` directory exists
   - Check file permissions
   - Verify the database path in environment variables

3. **CORS errors**
   - Verify the CORS configuration in the server
   - Check that the client is using the correct API URL

### Getting Help

If you encounter any issues not covered in this guide:

1. Check the error messages
2. Review the documentation
3. Search for similar issues
4. Create a new issue if needed
