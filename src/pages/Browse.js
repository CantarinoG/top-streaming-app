import Header from "../components/Header";
import Hero from "../components/Hero";
import MediaRow from "../components/MediaRow";

import "../styles/Browse.css";

function Browse({titles}) {

    return <div className="browse-page">
        <Header/>
        <Hero titles={titles}/>
        <div className="rows-container">
            <MediaRow/>
        </div>
    </div>

}

export default Browse;