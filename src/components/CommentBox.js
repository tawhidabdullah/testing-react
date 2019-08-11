import React, { useState } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const handleChange = (e) => {
    setComment(e.target.value);

  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO - call an action creater and save the comment in commentlist

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

export default CommentBox; 