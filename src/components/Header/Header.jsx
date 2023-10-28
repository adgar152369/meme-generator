import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className="header--container container">
                <img 
                    src="/src/assets/troll-face.png" 
                    className="header--image"
                />
                <h2 className="header--title">Meme Generator</h2>
                <h4 className="header--project">Built by React</h4>
            </div>
        </header>
    )
}

export default Header;