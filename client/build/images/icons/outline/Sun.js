import * as React from "react";

function SvgSun(props) {
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
        d="M12.005 5.143V4m0 16v-1.143M18.867 12h1.143M5.145 12H4m2.287-5.714L5.144 5.143m13.723 0l-1.144 1.143M6.287 17.714l-1.143 1.143m13.723 0l-1.144-1.143M15.436 12a3.43 3.43 0 01-3.43 3.429 3.43 3.43 0 110-6.858A3.43 3.43 0 0115.435 12z"
        stroke="currentColor"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default SvgSun;
