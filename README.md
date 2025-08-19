# First React Application

This project is a simple **React application** scaffolded using **Vite**. It demonstrates the basic setup and usage of React components, Vite bundling, and a minimal development environment.

---

## 🚀 Features

* **React 18** with functional components.
* **Vite** for fast bundling and hot module replacement (HMR).
* Entry point defined in `main.jsx`.
* Minimal example app (`App.jsx`) to get started.

---

## 📂 Project Structure

```
first_app/
├── node_modules/        # Installed dependencies
├── public/              # Static assets (served as-is)
├── src/                 # Source code
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point, renders App into DOM
├── .gitignore           # Ignored files for Git
├── index.html           # Root HTML template
├── package.json         # Project metadata & dependencies
├── vite.config.js       # Vite configuration file
└── README.md            # Project documentation
```

---

## ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ashbornie/first_app.git
   cd first_app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   By default, the app will be available at [http://localhost:5173](http://localhost:5173).

4. **Build for production:**

   ```bash
   npm run build
   ```

   The production build will be output to the `dist/` folder.

5. **Preview production build:**

   ```bash
   npm run preview
   ```

---

## 📜 Scripts (from `package.json`)

* `npm run dev` → Start Vite development server
* `npm run build` → Create production build
* `npm run preview` → Preview the production build locally

---

## 🛠️ Technologies Used

* [React](https://react.dev/) (Frontend library)
* [Vite](https://vitejs.dev/) (Build tool)
* [Node.js](https://nodejs.org/) (Runtime)

---

## 🖥️ Code Overview

### `main.jsx`

This is the **entry point** of the app. It imports React and ReactDOM, then renders the `App` component into the root DOM element.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### `App.jsx`

This is the **main application component**. Currently, it displays a simple welcome message.

```jsx
function App() {
  return (
    <>
      <h1>Hello, React + Vite!</h1>
    </>
  );
}

export default App;
```

---

## 📦 Dependencies

### Production

* `react`
* `react-dom`

### Development

* `vite`
* `@vitejs/plugin-react`

---

## 🤝 Contribution

Feel free to fork this repository and submit pull requests if you want to enhance it.

---

## 📄 License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project.
