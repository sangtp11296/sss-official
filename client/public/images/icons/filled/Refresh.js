import * as React from "react";

function SvgRefresh(props) {
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
        d="M18.967 12.467A6.967 6.967 0 0012 5.5v-1a7.967 7.967 0 015.353 13.867H20v1h-3.733a.5.5 0 01-.5-.5v-3.734h1v2.414a6.947 6.947 0 002.2-5.08zm-12.32-5.9H4v-1h3.733a.5.5 0 01.5.5V9.8h-1V7.386A6.967 6.967 0 0012 19.433v1A7.967 7.967 0 016.647 6.567z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRefresh;
