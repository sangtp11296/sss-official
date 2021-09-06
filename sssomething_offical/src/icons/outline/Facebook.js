import * as React from "react";

function SvgFacebook(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 20a8 8 0 110-16 8 8 0 010 16zm0 0v-9.143a2.286 2.286 0 012.286-2.286h.571m-5.714 4.572h5.714"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgFacebook;
