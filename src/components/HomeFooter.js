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
            <a href="https://github.com/CantarinoG" target="_blank"><img src="./icons/githubIcon.svg" alt="GitHub"/> By CantarinoG</a>
        </span>
    </div>

}

export default HomeFooter;