// ==============================
// Importing Components
// ==============================

// Components created in Module 1.1
import Button from "./components/Button.jsx";
import InterviewCard from "./components/InterviewCard.jsx";
import Navbar from "./components/Navbar.jsx";
import QuestionCard from "./components/QuestionCard.jsx";

// ==============================
// Importing React Hooks
// ==============================

// useState -> Stores data that can change and updates the UI automatically
// useEffect -> Runs side effects like API calls, timers, etc.

import { useState, useEffect } from "react";

function App() {

  // ==========================================================
  // MODULE 1.2 : useState (State Management)
  // ==========================================================

  // State Example 1
  // Stores the counter value.
  // Whenever setCount() is called, React automatically re-renders the UI.
  const [count, setCount] = useState(0);

  // State Example 2
  // Stores text entered by the user.
  // Used to demonstrate controlled input.
  const [str, setStr] = useState("");

  // ==========================================================
  // MODULE 1.2 : Event Handling
  // ==========================================================

  // Function executed when Alert button is clicked.
  function hello() {
    alert("Hello");
  }

  // ==========================================================
  // MODULE 1.2 : map()
  // ==========================================================

  // Sample array used to understand map()
  // In real projects, this data usually comes from an API.
  const roles = [
    "Frontend",
    "Backend",
    "AI Engineer"
  ];

  // ==========================================================
  // MODULE 1.3 : Forms
  // ==========================================================

  // States used for Login Form

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form Submit Function
  // preventDefault() prevents page refresh.
  function handleSubmit(e) {

    e.preventDefault();

    console.log("Name :", name);
    console.log("Email :", email);
    console.log("Password :", password);

    alert("Login Successful");
  }

  // ==========================================================
  // MODULE 1.3 : useEffect
  // ==========================================================

  // Runs only once when the component loads.
  // Dependency array [] means "Run only once".

  useEffect(() => {

    console.log("Login Page Loaded");

  }, []);

  // ==========================================================
  // JSX (User Interface)
  // ==========================================================

  return (

    <>

      {/* ==========================================================
          MODULE 1.1 : Components + Props
          ========================================================== */}

      {/* Uncomment to test Components */}

      {/*
      <Navbar />

      <InterviewCard
        role="Frontend Developer"
        difficulty="Easy"
      />

      <InterviewCard
        role="Backend Developer"
        difficulty="Medium"
      />

      <Button
        text="Start Interview"
      />
      */}

      {/* ==========================================================
          MODULE 1.2 : useState + Event Handling
          ========================================================== */}

      {/* Counter Example */}

      <h1>Counter : {count}</h1>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <br />
      <br />

      {/* Alert Example */}

      <button onClick={hello}>
        Click Me
      </button>

      <br />
      <br />

      {/* Controlled Input */}

      <input

        type="text"

        value={str}

        placeholder="Enter Your Name"

        onChange={(e) => setStr(e.target.value)}

      />

      <h2>Hello {str}</h2>

      <br />

      {/* ==========================================================
          MODULE 1.2 : map()
          ========================================================== */}

      {/* map() creates one QuestionCard for every item in the array */}

      {

        roles.map((role) => (

          <QuestionCard

            key={role}

            question={role}

          />

        ))

      }

      <hr />

      {/* ==========================================================
          MODULE 1.3 : Forms
          ========================================================== */}

      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}

        <label htmlFor="name">

          Name :

        </label>

        <input

          id="name"

          type="text"

          value={name}

          placeholder="Enter Name"

          onChange={(e) => setName(e.target.value)}

        />

        <br />
        <br />

        {/* Email */}

        <label>

          Email :

        </label>

        <input

          type="email"

          value={email}

          placeholder="Enter Email"

          onChange={(e) => setEmail(e.target.value)}

        />

        <br />
        <br />

        {/* Password */}

        <label>

          Password :

        </label>

        <input

          type="password"

          value={password}

          placeholder="Enter Password"

          onChange={(e) => setPassword(e.target.value)}

        />

        <br />
        <br />

        <button type="submit">

          Login

        </button>

      </form>

    </>

  );

}

export default App;