import React from "react";
type appProps = {
  style?: React.CSSProperties;
};
const Loading = (props: appProps): JSX.Element => {
  return (
    <div style={props.style} className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
