import * as React from "react";

function SvgLocation(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.533 5.086V4h-1.066v1.086a6.934 6.934 0 00-6.38 6.376H4v1.066h1.087a6.942 6.942 0 006.38 6.385V20h1.066v-1.087a6.942 6.942 0 006.38-6.385H20v-1.066h-1.087a6.934 6.934 0 00-6.38-6.376zm0 2.114v4.262H16.8v1.066h-4.267V16.8h-1.066v-4.272H7.2v-1.066h4.267V7.2h1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLocation;
