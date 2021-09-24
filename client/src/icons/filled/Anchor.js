import * as React from "react";

function SvgAnchor(props) {
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
        d="M12 5.067a1.6 1.6 0 00-1.6 1.598 1.6 1.6 0 003.2 0A1.6 1.6 0 0012 5.067zM9.333 6.665a2.667 2.667 0 113.2 2.612v9.626a6.932 6.932 0 006.38-6.374H16.8v-1.067H20v.533a7.997 7.997 0 01-8 7.995c-4.418 0-8-3.579-8-7.995v-.533h3.2v1.066H5.087a6.932 6.932 0 006.38 6.375V9.277a2.667 2.667 0 01-2.134-2.612z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAnchor;
