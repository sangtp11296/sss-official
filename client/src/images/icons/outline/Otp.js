import * as React from "react";

function SvgOtp(props) {
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
        d="M10.286 9.714h3.428m-1.714 0v5.143m3.429 0V12m0 0V9.714h1.142a1.143 1.143 0 110 2.286H15.43zM8.57 10.857v2.286a1.143 1.143 0 01-2.285 0v-2.286a1.143 1.143 0 012.285 0zM5.143 4h13.714C19.488 4 20 4.512 20 5.143v13.714c0 .631-.512 1.143-1.143 1.143H5.143A1.143 1.143 0 014 18.857V5.143C4 4.512 4.512 4 5.143 4z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgOtp;
