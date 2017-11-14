import React from 'react';
import PhotoTile from '../PhotoTile';
import './photo-stream.css';

function PhotoStream(props) {

    const numCols = 3;

    const photoTiles = [];
    props.photos.forEach((photo, index) => {
      photoTiles.push(
          <div className="photostream__col">
            <PhotoTile
              key={photo.id}
              thumbnail={photo.url_m} 
              title={photo.title} 
              id={photo.id}
              owner={photo.owner}
              ownername={photo.ownername}
              description={photo.description._content}
              tags={photo.tags}
              />
          </div>
        )
    });

    const photoRows = []
    let key = 0;
    for (let i=0; i<photoTiles.length; i+=numCols) {
        key++;
        photoRows.push(
            <div className="photostream__row" key={key}>
                {photoTiles.slice(i,i+numCols)}
            </div>
        )
    }

    return (
      <div className="container photostream-gallery">
        {photoRows}
      </div>
    );
}

export default PhotoStream;
