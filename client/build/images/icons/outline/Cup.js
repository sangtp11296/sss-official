import * as React from "react";

function SvgCup(props) {
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
        d="M17.357 10.893v6.071a3.643 3.643 0 01-3.643 3.643H7.643A3.643 3.643 0 014 16.964v-6.071c0-.67.544-1.214 1.214-1.214h10.929c.67 0 1.214.543 1.214 1.214zm0 0h2.429c.67 0 1.214.543 1.214 1.214v2.429c0 .67-.544 1.214-1.214 1.214h-2.429m-8.5-7.893V5.43M12.5 7.857V3"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgCup;
