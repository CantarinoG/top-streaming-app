import "../styles/Header.css";

import Logo from "../components/Logo";

function Header({browseClick, catalogClick, signOutClick}) {

    return <header>
        <nav>
        <Logo fontSize="2em"/>
            <ul>
                <li><button onClick={browseClick}>Browse</button></li>
                <li><button onClick={catalogClick}>See Catalog</button></li>
            </ul>
        </nav>
        <div className="header-options">
            <button><img src="./icons/searchIcon.svg" alt="Search"/></button>
            <button><img src="./icons/notificationIcon.svg" alt="Notification"/></button>
            <button><img src="./icons/settingsIcon.svg" alt="Settings"/></button>
            <button className="sign-out" onClick={signOutClick}>Sign Out</button>
        </div>

    </header>

}

export default Header;