import "../styles/Hero.css";

function Hero({titles, mediaClick}) {

    let image = null;
    const index = titles.findIndex((title) => title.id === 0);
    const title = titles[index];
    if (title) image = title.image;

    return <div className="hero" style={{ 
        backgroundImage: `url(${image})` 
      }}>
        <div className="gradient">
            <span className="hero-title">Two Souls</span>
            <span className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi nunc, luctus vitae diam quis, placerat accumsan mi.</span>
            <div className="hero-buttons">
                <button data-id={0} onClick={mediaClick}><img src="./icons/playIcon.svg" alt=""/>Watch</button>
                <button><img src="./icons/infoIcon.svg" alt=""/>More Info</button>
            </div>
        </div>

    </div>
}

export default Hero;