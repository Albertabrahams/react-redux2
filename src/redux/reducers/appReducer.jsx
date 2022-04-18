import { SET_LOADING } from "../types/appTypes";
import { CLEAR_LOADING } from "../types/appTypes";

const initialState = {
    loading:false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_LOADING:
    return { ...state, loading:true }
  case CLEAR_LOADING:
    return { ...state, loading:false }

  default:
    return state
  }
}
