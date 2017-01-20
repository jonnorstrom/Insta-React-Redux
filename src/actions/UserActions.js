export const FETCH_USER_DATA = 'FETCH_USER_DATA'
export const FETCH_USER_DATA_FULFILLED = 'FETCH_USER_DATA_FULFILLED'
export const FETCH_USER_DATA_REJECTED = 'FETCH_USER_DATA_REJECTED'

import oscarData from '../oscarData.json'

export function fetchUser() {
  return (dispatch) => {
    dispatch({
      type: FETCH_USER_DATA
    });
    dispatch({
      type: FETCH_USER_DATA_FULFILLED,
      payload: oscarData
    })
    // fetch('https://www.instagram.com/countaightblah/media')
    // .then((response) => response)
    // .then((respJSON) => {
    //   console.log(respJSON);
    //     dispatch({
    //       type: FETCH_USER_DATA_FULFILLED,
    //       payload: respJSON.body
    //     })
    // })
    // .catch((err) => {
    //   dispatch({
    //     type: FETCH_USER_DATA_REJECTED, err
    //   })
    // })
  }
}
