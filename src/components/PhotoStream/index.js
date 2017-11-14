import React from 'react'
import PhotoTile from '../PhotoTile'
import './photo-stream.css'

function PhotoStream (props) {
  const numCols = 3

  const photoTiles = []
  props.photos.forEach((photo, index) => {
    photoTiles.push(
      <div className='photostream__col' key={photo.id}>
        <PhotoTile photo={photo} />
      </div>
        )
  })

  const photoRows = []
  let key = 0
  for (let i = 0; i < photoTiles.length; i += numCols) {
    key++
    photoRows.push(
      <div className='photostream__row' key={key}>
        {photoTiles.slice(i, i + numCols)}
      </div>
        )
  }

  return (
    <div className='container photostream-gallery'>
      {photoRows}
    </div>
  )
}

export default PhotoStream
