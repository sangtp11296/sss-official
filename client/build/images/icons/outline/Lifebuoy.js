import * as React from "react";

function SvgLifebuoy(props) {
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
        d="M15.232 15.232a4.572 4.572 0 01-6.465 0m6.466 0a4.572 4.572 0 000-6.464m0 6.464l2.424 2.425m-8.89-2.425a4.571 4.571 0 010-6.464m0 6.464l-2.424 2.425m8.89-8.89a4.571 4.571 0 00-6.466 0m6.466 0l2.424-2.424m-8.89 2.425L6.343 6.343m11.314 11.314a8 8 0 01-11.314 0m11.314 0a8 8 0 000-11.314M6.343 17.657a8 8 0 010-11.314m11.314 0a8 8 0 00-11.314 0"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgLifebuoy;
