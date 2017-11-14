const initialState = {
  photos: null,
  error: false
  // page: 1 //TODO
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS_FULFILLED': {
      return {
        ...state,
        photos: action.payload.photo
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
