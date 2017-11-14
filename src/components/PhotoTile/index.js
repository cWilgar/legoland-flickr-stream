import React from 'react';
import './photo-tile.css';

function PhotoTile(props) {

    const photo = props.photo;

    const ownerLink = `https://www.flickr.com/photos/${photo.owner}`;
    const photoLink = `${ownerLink}/${photo.id}`;
    const photoTags = photo.tags.replace(/ /g, ', ');

    return (
      <div className="panel-primary panel--phototile">
        <img src={photo.url_s} alt={photo.title}
          srcSet={`${photo.url_s} ${photo.width_s}w, ${photo.url_m} ${photo.width_m}w, ${photo.url_l} ${photo.width_l}w`}
          sizes="(min-width: 1000px) 1000px, 100vw"
        />
        <div className="panel-body">
          <a target="_blank" href={photoLink}>{photo.title}</a> by 
          _<a target="_blank" href={ownerLink}>{photo.ownername}</a>
          <p
            dangerouslySetInnerHTML={{ __html: photo.description._content }} 
          />
          <p>
            <b>Tags:</b> {photoTags}
          </p>
        </div>
      </div>
    );
}

export default PhotoTile;
