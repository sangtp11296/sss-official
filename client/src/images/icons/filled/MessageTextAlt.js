import * as React from "react";

function SvgMessageTextAlt(props) {
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
        d="M7.429 16.563v3.427L12 16.563h6.857c.632 0 1.143-.51 1.143-1.142V5.142C20 4.511 19.49 4 18.857 4H5.143C4.51 4 4 4.51 4 5.142v10.28c0 .63.51 1.141 1.143 1.141h2.286zm8.5-8.495H8.07v1h7.858v-1zm-2.286 3.427H8.07v1h5.572v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessageTextAlt;
