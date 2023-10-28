import memesData from "../../../memesData";
import './Meme.css';
import { useState } from "react";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        memeImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => {
            return { ...prevMeme, [name]: value }
        });
    }

    function handleRandomImage() {
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomIndex].url;
        setMeme((prevMeme) => {
            return { ...prevMeme, memeImage: url }
        })
    }

    return (
        <main className="meme">
            <div className="meme--form">
                <input
                    className="meme--input"
                    type="text"
                    name="topText"
                    placeholder="Top text"
                    onChange={handleChange}
                    value={meme.topText} />
                <input
                    className="meme--input"
                    type="text"
                    name="bottomText"
                    placeholder="Bottom text"
                    onChange={handleChange}
                    value={meme.bottomText} />

                <button
                    className="meme--button"
                    type="submit"
                    onClick={handleRandomImage}
                >Generate New Meme Image 🌄</button>
            </div>

            <div className="meme--container container">
                <img src={meme.memeImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;