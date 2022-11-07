import memesData from "../memesData";
import { useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");
  const getMemeImage = () => {
    const rand = Math.floor(Math.random() * 100);

    const url = memesData.data.memes[rand]["url"];

    setMemeImage(url);
  };

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} alt="picture of a random image selected" />
    </main>
  );
}
