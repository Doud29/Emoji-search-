import "./App.scss";
import Search from "./compenant/Search";
import Line from "./compenant/Line";
import Footer from "./compenant/Footer";
import { useState } from "react";

function App() {
  const [emoji, setEmoji] = useState("");

  return (
    <div className="App">
      <Search titre="😎 Emoji Search 😎 " emoji={emoji} setemoji={setEmoji} />
      <Line emoji={emoji} />
      <Footer titre="Made with React at Le Reacteur by Doud" />
    </div>
  );
}

export default App;
