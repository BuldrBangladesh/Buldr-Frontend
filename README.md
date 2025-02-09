# Buldr-Frontend

A multi-purpose platform tailored to engineers for showcasing their skills.

This project is the frontend for the Buldr application, built with [Create React App](https://github.com/facebook/create-react-app).

## Features

- **Authentication**:
  - Uses Firebase Authentication for user sign-up, login, and account management.
  - Implements secure authentication flows with JWT tokens.
  - Stores authentication tokens in local storage for session management.

- **Dashboard**:
  - Displays personalized information using React components.
  - Fetches user-specific data from a REST API.
  - Uses charts and graphs for data visualization with libraries like Chart.js.

- **Profile Management**:
  - Allows users to view and edit their profiles.
  - Uses forms with validation for profile updates.
  - Stores profile data in a NoSQL database like Firebase Firestore.

- **Social Features**:
  - Enables users to create posts and comments.
  - Uses a real-time database to update posts and comments dynamically.
  - Implements like and share functionalities.

- **Notes Management**:
  - Allows users to create, view, edit, and delete notes.
  - Uses a rich text editor for note creation and editing.
  - Stores notes in a cloud database for persistence.
  
- **AI Tools**:
  - AI Chatbot: Uses a chatbot model to provide conversational AI capabilities.
  - Text Summarization: Uses a summarization model to generate summaries of text.
  - Text Paraphrasing: Uses a paraphrasing model to rewrite text.

- **Marketplace**:
  - Displays a list of products available for purchase.
  - Allows users to view and manage their orders.
  - Integrates with a payment gateway like Stripe for transactions.

- **Context Providers**:
  - Uses React Context API for state management.
  - Provides context for authentication, user ID, and reading room.
  - Ensures global state is accessible throughout the application.

- **Local Storage**:
  - Utilizes local storage to persist user preferences and session data.
  - Stores authentication tokens, language preferences, and other user-specific settings.
  - Ensures data is retained across browser sessions.

- **Protected Routes**:
  - Uses React Router for navigation.
  - Implements route guards to protect sensitive routes.
  - Redirects unauthenticated users to the login page.

- **Language Support**:
  - Supports multiple languages using i18next.
  - Stores language preference in local storage.
  - Provides a language switcher in the UI.

- **Responsive Design**:
  - Uses Tailwind CSS for styling.
  - Ensures the application is mobile-friendly and responsive.
  - Implements a grid system and media queries for layout adjustments.

- **Animations**:
  - Uses Lottie for interactive animations.
  - Integrates animations into the UI for better user experience.
  - Provides smooth transitions and effects.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Material-UI**: A popular React UI framework for building responsive and modern web applications.
- **Flowbite**: A component library built on top of Tailwind CSS.
- **Firebase**: A platform for building web and mobile applications, used here for authentication and real-time database.
- **Axios**: A promise-based HTTP client for making API requests.
- **React PDF Renderer**: A library for generating PDF documents in React.
- **React Markdown Editor**: A markdown editor component for React applications.
  
## Run Locally

After cloning the repository, you can run the following commands to start the frontend application:

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
