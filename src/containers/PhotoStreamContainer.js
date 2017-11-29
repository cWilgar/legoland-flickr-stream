import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import PhotoStream from '../components/PhotoStream'

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => {
  return {
    getPhotoStream: (page) => {
      dispatch(actions.fetchPhotos(page))
    }
  }
}

class photoStreamContainer extends React.Component {
  render () {
    return new PhotoStream(this.props)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(photoStreamContainer)
