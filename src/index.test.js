import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import fetchMock from 'fetch-mock'
import mockData from './mock_data.json'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const initialState = {
  photos: [],
  error: false,
  moreToLoad: true
}
const mockStore = configureMockStore([thunk])

it('renders without crashing', () => {
  fetchMock.getOnce(
      /https:\/\/api.flickr.com\/services\/rest\/*/,
      { body: mockData, headers: { 'content-type': 'application/json' }
    })

  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={mockStore(initialState)}>
      <App />
    </Provider>, div
  )
})
