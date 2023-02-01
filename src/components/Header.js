import "../styles/Header.css";

import Logo from "../components/Logo";

function Header() {

    return <header>
        <nav>
        <Logo fontSize="2em"/>
            <ul>
                <li><button>Browse</button></li>
                <li><button>See Catalog</button></li>
            </ul>
        </nav>
        <div className="header-options">
            <button><img src="./icons/searchIcon.svg" alt="Search"/></button>
            <button><img src="./icons/notificationIcon.svg" alt="Notification"/></button>
            <button><img src="./icons/settingsIcon.svg" alt="Settings"/></button>
        </div>

    </header>

}

export default Header;