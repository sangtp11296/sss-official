import * as React from "react";

function SvgCartMinus(props) {
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
        d="M4 4l.686 2.286m0 0l2.743 9.143H20V8.57a2.286 2.286 0 00-2.286-2.285H4.686zm5.6 4.571H16M17.714 20a1.143 1.143 0 110-2.286 1.143 1.143 0 010 2.286zm-9.143-1.143a1.143 1.143 0 112.286 0 1.143 1.143 0 01-2.286 0z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgCartMinus;
