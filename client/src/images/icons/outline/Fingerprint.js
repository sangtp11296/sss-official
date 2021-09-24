import * as React from "react";

function SvgFingerprint(props) {
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
        d="M18.14 7.57a7.146 7.146 0 01.97 4.44v.888a5.358 5.358 0 00.705 2.663m-11.28-4.44c0-.941.372-1.844 1.033-2.51a3.511 3.511 0 012.492-1.04c.935 0 1.832.374 2.493 1.04a3.565 3.565 0 011.032 2.51v.889c0 1.92.618 3.79 1.762 5.327m-5.287-6.215v1.776A12.495 12.495 0 0014.263 20m-5.728-5.327A16.07 16.07 0 0010.122 20m-4.318-1.776a19.67 19.67 0 01-.793-6.214v-.888a7.144 7.144 0 01.937-3.558 7.076 7.076 0 012.58-2.608 7.01 7.01 0 017.057-.004"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgFingerprint;
