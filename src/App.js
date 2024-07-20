import React from "react";
import Dictionary from "./components/Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="aesthetic" />
        </main>
        <footer className="mt-5 footer">
          <div className="footer-content">
            <p className="credit">
              Coded by{" "}
              <a
                href="https://github.com/RAHMA-SAID-afk"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                RAHMA-SAID
              </a>
              ,{" "}
              <a
                href="https://github.com/RAHMA-SAID-afk/Dictionary-app-Using-React"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Open sourced on Github
              </a>
              . 
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
