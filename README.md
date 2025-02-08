# Biggie React Project

This project is a React application built with TypeScript and Vite. It is designed to provide a flexible and efficient setup for developing large web applications, featuring reusable components, structured routing, and state management.

## Features

- **Reusable Components**: The `src/components` directory contains a collection of reusable components that can be utilized across different pages of the application.
- **Page Structure**: The `src/pages` directory includes various pages, such as the home page and any additional pages you may create.
- **Routing**: The application uses React Router for navigation, allowing for a seamless user experience.
- **TypeScript Support**: The project is built with TypeScript, providing type safety and improved developer experience.
- **Fast Development**: Leveraging Vite for fast development and building processes.
- **State Management**: Integrated with Redux Toolkit for efficient state management.
- **SEO Optimization**: Implemented using `react-helmet-async` to dynamically update the document head for each route or component.
- **Form Handling**: Includes form components and validation utilities.
- **Custom Hooks**: Provides custom hooks for common functionalities like modal handling and step navigation.
- **API Integration**: Configured with Axios for API requests and includes token management.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install` or `yarn install`.
3. Start the development server: `npm run dev` or `yarn dev`.
4. Customize the project by adding or modifying components and pages as needed.

## Project Structure

```
biggie-react
├── src
│   ├── animation
│   ├── assets
│   ├── components
│   │   ├── forms
│   │   ├── global
│   │   ├── svg
│   │   ├── typography
│   │   └── ui
│   ├── config
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── routes
│   ├── services
│   ├── store
│   ├── styles
│   ├── types
│   └── utils
├── public
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Routing

This project uses React Router for navigation. Routes are set up using `createBrowserRouter`. You can find the route configurations in the `src/App.tsx` file.

## State Management

State management is handled using Redux Toolkit. The store configuration can be found in the `src/store` directory.

## SEO

SEO optimization is implemented using `react-helmet-async`. This allows you to dynamically update the document head for each route or component.

## Contributing

Contributions are welcome! If you would like to add new features or improve existing ones, please follow the established code style and submit a pull request for review.