import Hero from "../components/Hero";
import MediaRow from "../components/MediaRow";

import "../styles/Browse.css";

function Browse({titles, mediaClick}) {

    return <div className="browse-page">
        <Hero titles={titles} mediaClick={mediaClick}/>
        <div className="rows-container">
            <MediaRow titles={titles} mediaClick={mediaClick} rowTitle="Top 10 Today"/>
            <MediaRow titles={titles} mediaClick={mediaClick} rowTitle="Recommended For You"/>
            <MediaRow titles={titles} mediaClick={mediaClick} rowTitle="Trending"/>
            <MediaRow titles={titles} mediaClick={mediaClick} rowTitle="Editor's Choice"/>
        </div>
    </div>

}

export default Browse;