import React from 'react';

function PhotoTile(props) {
    const ownerLink = `https://www.flickr.com/photos/${props.owner}`;
    const photoLink = `${ownerLink}/${props.id}`;
    const photoTags = props.tags.replace(/ /g, ', ');

    return (
      <div>
        <img src={props.thumbnail} alt={props.title}/>
        <div>
          <a target="_blank" href={photoLink}>{props.title}</a> by <a target="_blank" href={ownerLink}>{props.ownername}</a>
        </div>
        <p 
          dangerouslySetInnerHTML={{ __html: props.description }} 
        />
        <p>
          Tags: {photoTags}
        </p>
      </div>
    );
}

export default PhotoTile;
