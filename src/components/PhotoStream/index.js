import React from 'react';
import PhotoTile from '../PhotoTile';

function PhotoStream(props) {

    let photoTiles = [];
    props.photos.forEach(photo => {
      photoTiles.push(
          <PhotoTile
            key={photo.id}
            thumbnail={photo.url_t} 
            title={photo.title} 
            id={photo.id}
            owner={photo.owner}
            ownername={photo.ownername}
            description={photo.description._content}
            tags={photo.tags}
            />
        )
    });

    return (
      <div className="photostream-gallery">
        {photoTiles}
      </div>
    );
}

export default PhotoStream;
