import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import PhotoStream from '../components/PhotoStream';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
  return {
    getPhotoStream: () => {
      dispatch(actions.fetchPhotos())
    }
  }
}

class photoStreamContainer extends React.Component {
  componentWillMount() {
    if(!this.props.photos) {
      this.props.getPhotoStream();
    }
  }
  render() {
    if(!this.props.photos) {
      return (<h2>
        { this.props.error ? 'Error Loading Photos :(' : 'Loading Photos...' }  
      </h2>)
    }
    return <PhotoStream photos={this.props.photos} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(photoStreamContainer) 
