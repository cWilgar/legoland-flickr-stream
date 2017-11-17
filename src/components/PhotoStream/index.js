import React from 'react'
import PhotoTile from '../PhotoTile'
import './photo-stream.css'
import InfiniteScroll from 'react-infinite-scroller'

function PhotoStream (props) {
  let loader = (<h2>Loading Photos...</h2>)
  let content = []

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
  content.push(photoRows)

  // If there was an error in the most recent load, show error message
  if (props.error) {
    content.push(<h2>Error Loading Photos</h2>)
    loader = ''
  }

  return (
    <div className='container'>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.getPhotoStream.bind(null)}
        hasMore={props.moreToLoad}
        loader={loader}>
        <div className="tracks">
          {photoRows}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default PhotoStream
