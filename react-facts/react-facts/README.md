#  ReactFacts Project 🚀

This project is an introduction to React, covering fundamental concepts such as setting up a project, JSX, custom components, and styling.

## 📚 What I Learned:

### 1️⃣ Why Care About React?
React is a powerful and popular JavaScript library for building dynamic and reactive user interfaces. Its component-based approach allows for better code reuse and easier maintenance.

### 2️⃣ Setting Up a New React Project
I learned how to initialize a React project using Create React App:
```sh
npx create-react-app reactfacts
cd reactfacts
npm start
```
This automatically sets up a project structure with essential tools.

### 3️⃣ Introduction to JSX
JSX is a JavaScript extension that allows writing HTML directly in React code. Example:
```jsx
const element = <h1>Hello, React!</h1>;
```
JSX simplifies UI development by combining logic and presentation.

### 4️⃣ Creating Custom Components
Components are the core of React. I learned how to create a simple component:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```
Components help structure the interface into small, reusable elements.

### 5️⃣ Styling Components
React supports multiple styling approaches: traditional CSS, CSS modules, or inline styles. Example using inline styles:
```jsx
const style = { color: 'blue', fontSize: '20px' };
return <p style={style}>Styled text in React</p>;
```
I also explored libraries like Styled Components and Tailwind CSS.

---

## 📂 Installation and Execution

1. Clone the repository
   ```sh
   git clone https://github.com/user/reactfacts.git
   cd reactfacts
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm start