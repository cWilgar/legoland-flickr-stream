import React from 'react';
import './photo-tile.css';

function PhotoTile(props) {
    const ownerLink = `https://www.flickr.com/photos/${props.owner}`;
    const photoLink = `${ownerLink}/${props.id}`;
    const photoTags = props.tags.replace(/ /g, ', ');

    return (
      <div className="panel-primary panel--phototile">
        <img src={props.thumbnail} alt={props.title}/>
        <div className="panel-body">
          <a target="_blank" href={photoLink}>{props.title}</a> by <a target="_blank" href={ownerLink}>{props.ownername}</a>
          <p
            dangerouslySetInnerHTML={{ __html: props.description }} 
          />
          <p>
            <b>Tags:</b> {photoTags}
          </p>
        </div>
      </div>
    );
}

export default PhotoTile;
