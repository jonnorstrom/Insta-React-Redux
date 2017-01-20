import {
  FETCH_USER_DATA,
  FETCH_USER_DATA_FULFILLED,
  FETCH_USER_DATA_REJECTED
} from '../actions/UserActions'

const initialState = {
  name: "Oscar Delgadillo",
  img_url: "https://scontent.cdninstagram.com/t51.2885-19/11428398_923102181094740_1078862532_a.jpg",
  pictures: [],
  fetching: false
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_DATA: {
      return {...state, fetching: true}
    }
    case FETCH_USER_DATA_FULFILLED: {
      const pictures = action.payload['items'];
      return {...state, pictures, fetching: false}
    }
    case FETCH_USER_DATA_REJECTED: {
      const { err } = action
      return {...state, fetching: false, err}
    }
    default: {
      return state;
    }
  }
}
