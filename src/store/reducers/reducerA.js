/**
 * ACTION TYPES
 */
const SET_VALUE = 'SET_VALUE'

/**
 * INITIAL STATE
 */
const initialState = {
  value: 0,
}

/**
 * ACTION CREATORS
 */
export const setValue = (value) => ({
  type: SET_VALUE,
  value,
})

/**
 * THUNK CREATORS
 */
// export const fetchRandomCard = () => async (dispatch) => {
//   const {data} = await axios.get('/api/cards/random')
//   dispatch(setCard(data))
// }

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return {...state, value: action.value}
    default:
      return state
  }
}
