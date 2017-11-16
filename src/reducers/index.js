const initialState = {
  photos: [],
  error: false,
  moreToLoad: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS_FULFILLED': {
      return {
        photos: [...state.photos, ...action.payload.photo], 
        //Nb: aware that the above doesn't do deep cloning, I think I would use the immutability-helper package if the items of the photo objects were likely to be updated
        error: false,
        moreToLoad: (action.payload.pages > action.payload.page)
      }
    }
    case 'FETCH_PHOTOS_ERROR': {
      return {
        ...state,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}
export default reducer
