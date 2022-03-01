import React, {useState} from "react";
import data from "./data";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    } else if (amount > 8) {
      amount = 8;
    }
    let displayedText = data.slice(0, amount);
    setText(displayedText);
  }
  const handleChange = (e) => {
    let inputValue = e.target.value;
    setCount(inputValue);
  }

  return (
    <section className="lorem-ipsum-container">
      <h1 className="main-title">Tired of boring lorem ipsum</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Paragraphs:
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={handleChange}
        />
        <button type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-container">
        {text.map((item, index) => {
          return (
            <p key={index} className="lorem-text">{item}</p>
          )
        })}
      </article>
    </section>
  );
}

export default App;
