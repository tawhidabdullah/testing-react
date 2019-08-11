import commentReducer from "reducers/Comment.Reducer";
import {
  SAVE_COMMENT
} from "actions/types";

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment"
  };

  const newState = commentReducer([], action);
  expect(newState).toEqual(['new comment']);
});

it('handles actions of unknown type', () => {
  const newState = commentReducer([], {
    type: 'unknown'
  });
  expect(newState).toEqual([]);
});