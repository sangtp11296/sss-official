import * as React from "react";

function SvgUserPlus(props) {
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
        d="M9.503 5a3.501 3.501 0 100 7 3.5 3.5 0 100-7zM16.007 10.003v2.001h-2v1h2v2.002h1v-2.001h2.002v-1h-2.001v-2.002h-1zM11.505 14H7.502A3.502 3.502 0 004 17.5V20h11.007v-2.499A3.502 3.502 0 0011.505 14z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUserPlus;
