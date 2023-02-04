import "../styles/Catalog.css";

function Catalog({titles}) {

    return <div className="catalog-page">
        <h1>Catalog</h1>
        <div className="grid-container">

        {titles.map((title) => 
                <div className="grid-item" catalogid={title.id} key={title.id} style={{ 
                    backgroundImage: `url(${title.image})` 
                  }}>
                    <span className="grid-title">{title.name}</span>
                </div>
                )}
        </div>
    </div>

}

export default Catalog;