import "./App.css";
import please from "./assests/please-pleaseplease.gif";
import celebrate from "./assests/mochi-peach.gif";
import celebrateMore from "./assests/peach-goma.gif";
import { useState } from "react";



function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ left: 0, top: 0 });
  const [isHidden, setIsHidden] = useState(false);
  const [src, setSrc] = useState(please);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("I'll be back on 20 to meet you.");


  const handleYes = () => {
    setYesClicked(true);
    setIsHidden(true);
    setSrc(celebrate);
    setCount(count + 1);
   
     
   
    if (count >= 3) {
      setSrc(celebrateMore);
      setText("I am comming now.");
    }
  };
  const handleMouseOver = () => {
    const app = document.querySelector(".App").getBoundingClientRect();
    const noBtn = document.querySelector(".noBtn").getBoundingClientRect();

    const i = Math.floor(Math.random() * (app.width - noBtn.width)) + 1;
    const j = Math.floor(Math.random() * (app.height - noBtn.height)) + 1;

    setButtonPosition({ left: i, top: j });
  };
  return (
    <div className="App" style={{ position: "relative" }}>
      <h1 className="text">{yesClicked ? text : "Can I talk to you?"}</h1>
      <img src={src} alt="gif" className="gif" />
      <div className="btn-group">
        <button className="yesBtn" onClick={handleYes}>
          Yes
        </button>
        <button
          className="noBtn"
          style={{
            position: "absolute",
            left: buttonPosition.left,
            top: buttonPosition.top,
          }}
          onMouseOver={handleMouseOver}
          hidden={isHidden}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;
