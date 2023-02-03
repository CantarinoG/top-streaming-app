import Hero from "../components/Hero";
import MediaRow from "../components/MediaRow";

import "../styles/Browse.css";

function Browse({titles}) {

    return <div className="browse-page">
        <Hero titles={titles}/>
        <div className="rows-container">
            <MediaRow titles={titles} rowTitle="Top 10 Today"/>
            <MediaRow titles={titles} rowTitle="Recommended For You"/>
            <MediaRow titles={titles} rowTitle="Trending"/>
            <MediaRow titles={titles} rowTitle="Editor's Choice"/>
        </div>
    </div>

}

export default Browse;