import React, { useState } from 'react';
import { connect } from "react-redux";
import * as actions from "actions";

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const handleChange = (e) => {
    setComment(e.target.value);

  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO - call an action creater and save the comment in commentlist
    actions.saveComment(comment);

    setComment('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Add A Comment Here!</h4>
      <textarea
        value={comment}
        onChange={handleChange}
      />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  )
}

export default connect(null, actions)(CommentBox); 