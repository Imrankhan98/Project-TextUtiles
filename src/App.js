import "./App.css";
//import About from "./components/About";
import {useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

  function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode Enable", "Succes");
      //document.title = "textUtiles - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enable", "Succes");
      //document.title = "textUtiles - light mode";
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element={ <About />}> */}
          {/* </Route> */}

          {/* <Route path="/" element={<TextForm */}
          <TextForm showAlert={showAlert}
              heading="Enter your text to analyze below"
              mode={mode}/>
          {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
