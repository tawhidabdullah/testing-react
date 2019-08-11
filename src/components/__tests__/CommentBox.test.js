import React from "react";
import CommentBox from "components/CommentBox";
import Root from "Root";
import {
  mount
} from "enzyme";


let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      < CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});



describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value: "new comment"
      }
    });

    wrapped.update();
  });


  it('has a text area where user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('makes empty textarea when the form in submited', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
})