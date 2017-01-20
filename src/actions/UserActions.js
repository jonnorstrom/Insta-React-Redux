export const FETCH_USER_DATA = 'FETCH_USER_DATA'
export const FETCH_USER_DATA_FULFILLED = 'FETCH_USER_DATA_FULFILLED'
export const FETCH_USER_DATA_REJECTED = 'FETCH_USER_DATA_REJECTED'

export function fetchUser() {
  return (dispatch) => {
    dispatch({
      type: FETCH_USER_DATA
    });
    fetch('../../oscarData.json')
    .then((response) => response.json())
    .then((respJSON) => {
      dispatch({
        type: FETCH_USER_DATA_FULFILLED,
        payload: respJSON
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_USER_DATA_REJECTED, err
      })
    })
  }
}
