# Frontend Web Project

This README document provides an overview of the Frontend Web Project, a Next.js-based application. Below, you will find explanations for the various npm scripts available in the project's `package.json`, as well as details on integrating with the authorization service located at [abeeyh/authorization](https://github.com/abeeyh/authorization).

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run dev`

Starts the Next.js application in development mode. The app will be served at `http://localhost:3000` by default, and you'll see any linting errors in the console.

### `npm run build`

Builds the application for production usage. It optimizes the React application for the best performance. The build is minified, and the filenames include hashes.

### `npm run start`

Runs the built app in production mode. Before running this, you should run `npm run build` to create an optimized production build.

### `npm run lint`

Runs ESLint to automatically fix linting errors in JavaScript, JSX, TypeScript, and TSX files across the project. This helps maintain code quality and consistency.

### `npm run format`

Formats code using Prettier for all JavaScript, JSX, TypeScript, TSX, JSON, CSS, and Markdown files. This ensures that the code follows a consistent style.

### `npm run storybook`

Launches the Storybook environment at `http://localhost:6006`. Storybook is a tool for developing UI components in isolation and can help visualize various states of your components.

### `npm run build-storybook`

Builds the Storybook static web application. You can deploy the output to any web server or static file hosting service.

### Release Scripts

These scripts use `standard-version` for automatic versioning and CHANGELOG generation, adhering to semantic versioning:

- `npm run release`: Creates a standard version release.
- `npm run release:minor`: Creates a minor version release.
- `npm run release:major`: Creates a major version release.
- `npm run release:patch`: Creates a patch version release.

## Integration with Authorization Service

To integrate with the [abeeyh/authorization](https://github.com/abeeyh/authorization) service, follow these steps:

1. **Clone the Repository**: Clone the authorization service repository.

   ```sh
   git clone https://github.com/abeeyh/authorization.git
   ```

2. **Setup the Authorization Service**: Follow the setup instructions provided in the README.md of the abeeyh/authorization repository.

3. **Integrate with Your Next.js App**: Modify your Next.js application to interact with the authorization service. This typically involves setting up API routes or services in your app to communicate with the authorization endpoints.

4. **Environment Variables**: Ensure that any required environment variables for interacting with the authorization service are properly set up in your Next.js project.

5. **Authentication and Authorization Logic**: Implement the necessary authentication and authorization logic in your app, utilizing the abeeyh/authorization service for user authentication, token generation, and verification.
