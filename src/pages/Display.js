import "../styles/Display.css";

function Display({currentTitle, backClick}) {

    return <div className="display-page">
        <video controls autoPlay>
            <source src={currentTitle.video} type="video/mp4" />
        </video>
            <h1>{currentTitle.name}</h1>
            <button onClick={backClick}><img src="./icons/backIcon.svg" alt="Back"/></button>
    </div>

}

export default Display;