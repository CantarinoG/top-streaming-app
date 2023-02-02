import Header from "../components/Header";
import Hero from "../components/Hero";

import "../styles/Browse.css";

function Browse({titles}) {

    return <div className="browse-page">
        <Header/>
        <Hero titles={titles}/>
    </div>

}

export default Browse;