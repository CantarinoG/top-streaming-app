import "../styles/Catalog.css";

function Catalog({titles, mediaClick}) {

    return <div className="catalog-page">
        <h1>Catalog</h1>
        <div className="grid-container">

        {titles.map((title) => 
                <div onClick={mediaClick} className="grid-item" tabIndex="0" data-id={title.id} key={title.id} style={{ 
                    backgroundImage: `url(${title.image})` 
                  }}>
                    <span className="grid-title">{title.name}</span>
                </div>
                )}
        </div>
    </div>

}

export default Catalog;