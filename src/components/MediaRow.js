import "../styles/MediaRow.css";

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';



function MediaRow({titles, rowTitle, mediaClick}) {

    const currentTitles = [...titles];
    const shuffledTitlesList = currentTitles.sort(() => (Math.random() - 0.5));
    const firstPanel = shuffledTitlesList.slice(0,3);
    const secondPanel = shuffledTitlesList.slice(3,6);
    const thirdPanel = shuffledTitlesList.slice(6,9);
    


    return <div className="media-row">
            <span className="media-row-title">{rowTitle}</span>
            <Carousel interval={null} indicators={false}>
                <Carousel.Item>
                {firstPanel.map((title) => 
                <div onClick={mediaClick} className="media" tabIndex="0" data-id={title.id} key={title.id} style={{ 
                    backgroundImage: `url(${title.image})` 
                  }}>
                    <span className="thumb-title">{title.name}</span>
                </div>
                )}
                </Carousel.Item>
                <Carousel.Item>
                {secondPanel.map((title) => 
                <div onClick={mediaClick}className="media" tabIndex="0" data-id={title.id} key={title.id} style={{ 
                    backgroundImage: `url(${title.image})` 
                  }}>
                    <span className="thumb-title">{title.name}</span>
                </div>
                )}
                </Carousel.Item>
                <Carousel.Item>
                {thirdPanel.map((title) => 
                <div onClick={mediaClick} className="media" tabIndex="0" data-id={title.id} key={title.id} style={{ 
                    backgroundImage: `url(${title.image})` 
                  }}>
                    <span className="thumb-title">{title.name}</span>
                </div>
                )}
                </Carousel.Item>
            </Carousel>
            </div>

}

export default MediaRow;