import * as React from "react";

function SvgAdjustHorizontal(props) {
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
        d="M5.857 12H3m17.143 5.714h-2.857m2.857-11.428h-7.429m-2.285 0H3M8.143 12h12M15 17.714H3m12-2.285V20h2.286v-4.571H15zM5.857 9.714v4.572h2.286V9.714H5.857zM10.43 4v4.571h2.285V4H10.43z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgAdjustHorizontal;
