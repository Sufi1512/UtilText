import React, { useState } from 'react';

export default function Forms(props) {
  const [text, setText] = useState(""); 
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleLowClick=()=>{
    let newtext=text.toLowerCase()
    setText(newtext)
  }

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  //const  time=(0.008*wordCount).toFixed(2);
  return (
    <>
      <div className="container">
        <div className="my-box">
          <label>
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my-box"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary my-3 mx-3 " on onClick={handleLowClick}>Convert to Lower Case</button>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>{wordCount} words and {text.length} characters</p>
        <p>Reading {wordCount} words will take you around {0.008*wordCount} minutes </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
