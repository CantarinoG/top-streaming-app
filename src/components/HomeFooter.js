import "../styles/HomeFooter.css";

function HomeFooter() {

    return <div className="home-footer">
        <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Get Help</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy</a></li>
        </ul>
        <span className="github">
            <img src="./icons/githubIcon.svg" alt="GitHub"/>
            <a href="https://github.com/CantarinoG">By CantarinoG</a>
        </span>
    </div>

}

export default HomeFooter;