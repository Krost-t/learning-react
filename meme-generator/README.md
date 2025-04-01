# Meme Generator 🖼️

This project is a meme generator built with React. It allows users to create and customize memes by selecting images and adding text. The project demonstrates key React concepts such as controlled components, functional programming, fetching data, and handling side effects.

## 📚 What I Learned:

### ✅ Controlled Components (Forms)
Controlled components in React use state to manage form inputs. This ensures that React is in full control of the input values, making form handling easier and more predictable.

Example:
```jsx
<input
    type="text"
    name="topText"
    value={meme.topText}
    onChange={handleChange}
/>
```
This approach ensures that the UI is always in sync with the component's state.

### 🔄 Fetching Data from an API
Instead of using static images, this project fetches meme images from an external API (`imgflip.com`). The `useEffect` hook is used to perform the API call when the component mounts.

Example:
```jsx
useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes));
}, []);
```
This method ensures the app loads fresh data every time it starts.

### 🛠️ Functional Programming in React
React encourages functional programming by promoting the use of pure functions and immutable state updates. The `useState` hook is used to manage the meme state efficiently.

Example:
```jsx
function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMeme(prevMeme => ({
        ...prevMeme,
        imageUrl: allMemes[randomNumber].url
    }));
}
```
This ensures that state updates are handled in a predictable and efficient manner.

### ⚡ Side Effects with `useEffect`
Side effects in React, such as API calls, should be handled using the `useEffect` hook. In this project, `useEffect` ensures that memes are fetched only once when the component is mounted.

Example:
```jsx
useEffect(() => {
    console.log("Meme Generator Loaded!");
}, []);
```
This prevents unnecessary re-fetching and improves performance.

---

## ⚙️ Installation and Execution

1. Clone the repository

   ```sh
   git clone https://github.com/user/meme-generator.git
   cd meme-generator
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm start
   ```