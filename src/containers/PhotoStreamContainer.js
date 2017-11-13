import React from 'react';
import PhotoStream from '../components/PhotoStream';

import flickrData from '../mock_data.json';
const PHOTOS = flickrData.photos.photo;

function photoStreamContainer() {
  return <PhotoStream photos={PHOTOS} />
}

export default photoStreamContainer
