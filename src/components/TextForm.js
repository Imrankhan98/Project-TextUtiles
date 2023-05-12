import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //  console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase ", "Success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase ", "Success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text","Success");
  };
  const handleOnChange = (event) => {
    //  console.log("on change");
    setText(event.target.value);
  };
  const handleExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Remove", "Success");
  };

  const [text, setText] = useState(" ");
  //text="new text" //wrong way to change the state
  //setText("new text") //correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#253679" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"> 00</textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>
          To Uppercase 
        </button> 
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleLoClick}>
          To Lowercase 
        </button> 
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleClearClick}>
          Clear Text 
        </button> 
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaceClick}>Remove ExtraSpace</button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4>Your Text Summary</h4>
        <p>
          {text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length} Words and {text.length} Characters{" "}
        </p>
        <p>{0.008 * text.split(" ").filter((Element)=>{return Element.length!==0}).length} Minutes to read Words </p>
        <h4>Priview</h4>
        <p>{text.length > 0 ? text : "Enter something"}</p>
      </div>
    </>
  );
}
