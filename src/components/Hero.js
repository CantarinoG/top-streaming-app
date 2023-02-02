import "../styles/Hero.css";

function Hero({titles}) {

    let image = null;
    const index = titles.findIndex((title) => title.id === 0);
    const title = titles[index];
    if (title) image = title.image;

    return <div className="hero" style={{ 
        backgroundImage: `url(${image})` 
      }}>
        <div className="gradient">
            <span className="hero-title">Two Souls</span>
            <span className="hero-description"></span>
            <div className="hero-buttons">
                <button>Watch</button>
                <button>More Info</button>
            </div>
        </div>

    </div>
}

export default Hero;