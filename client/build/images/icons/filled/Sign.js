import * as React from "react";

function SvgSign(props) {
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
        d="M5.067 3.94v2.287H4v1.142h1.067v12.572h1.066V7.369H10.4v2.286H8.8c-.295 0-.533.256-.533.572v6.857c0 .315.238.571.533.571h10.667c.294 0 .533-.256.533-.571v-6.857c0-.316-.239-.572-.533-.572h-1.6V7.37H20V6.227H6.133V3.94H5.067zm6.4 5.715V7.37H16.8v2.286h-5.333z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSign;
