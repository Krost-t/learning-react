# Chef-Claude 🍳

Chef-Claude is a mini React project that allows users to input a list of ingredients. Based on this list, the application sends a request to an AI model (Claude / Hugging Face) to generate a custom recipe. It's a simple project that demonstrates the basics of React and the integration of an AI API.

📚 What I Learned

- **Event listeners**

    I discovered how to react to user actions (clicks, keyboard inputs, etc.) using event listeners to trigger interface changes.

- **State**

    I explored state management within components. State allows me to track data changes (like the list of ingredients) and automatically refresh the display when this data changes.

- **Conditional rendering**

    I learned to display different elements or components based on specific conditions (e.g., if the ingredient list is empty, show a specific message; otherwise, display the list).

- **Forms**

    I worked on creating and managing forms to input and validate ingredients. This is essential for collecting the necessary information before calling the AI.

- **State management strategies**

    I explored different ways to manage state in a React application, including the use of Hooks like useState and useEffect. This allowed me to structure the application properly and separate business logic from display logic.

⚙️ Installation and Execution

- **Clone the repository:**

    ```bash
    git clone https://github.com/votre-compte/chef-claude.git
    cd chef-claude
    ```

- **Install dependencies:**

    ```bash
    npm install
    ```

- **Run the application in development mode:**

    ```bash
    npm start
    ```

- **Open the application:** Go to [http://localhost:3000](http://localhost:3000) to use Chef-Claude.
