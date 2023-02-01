import Logo from "../components/Logo";
import SignIn from "../components/SignIn";
import HomeFooter from "../components/HomeFooter";

import "../styles/Home.css";

function Home({googleBtnClick})  {

    return <div className="home-container">
        <Logo fontSize="min(8vw, 50px)"/>
        <SignIn
        googleBtnClick={googleBtnClick}/>
        <HomeFooter/>
    </div>

}

export default Home;