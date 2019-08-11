import { combineReducers } from "redux";
import CommentReducer from "reducers/Comment.Reducer";


export default combineReducers({
  comments: CommentReducer
})