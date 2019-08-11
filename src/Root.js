import React from "react";
import reducers from "reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";


export default props => {
  return (
    <Provider store={createStore(reducers, {})} >
      {props.children}
    </Provider>
  )
}