import * as React from "react";

function SvgMoodFrown(props) {
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
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm4.267-1.6h1.066V9.333H8.267V10.4zm1.942 5.37a7.763 7.763 0 014.658-1.164l.532.037.074-1.064-.532-.037a8.83 8.83 0 00-5.298 1.325l-.452.282.566.905.452-.283zm5.524-5.37h-1.066V9.333h1.066V10.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoodFrown;
