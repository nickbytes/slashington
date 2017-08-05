import React from "react";

const ButtonLink = props =>
  <button
    style={{
      fontFamily: "inherit",
      fontSize: "inherit",
      fontWeight: "inherit",
      lineHeight: "inherit",
      border: "0",
      background: "none",
      cursor: "pointer",
      borderBottom: "4px dotted",
      outline: "0"
    }}
    onClick={e => props.update(props.onClickProp)}
  >
    {props.children}
  </button>;

export default ButtonLink;
