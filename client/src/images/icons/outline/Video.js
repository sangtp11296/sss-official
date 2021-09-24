import * as React from "react";

function SvgVideo(props) {
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
        d="M20 10.232a1 1 0 00-1.583-.812L14.9 11.946l3.517 2.527A1 1 0 0020 13.66v-3.428z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.472 7H5.457C4.652 7 4 7.656 4 8.466v7.327c0 .81.652 1.466 1.457 1.466h8.015c.805 0 1.457-.657 1.457-1.466V8.466c0-.81-.652-1.466-1.457-1.466z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgVideo;
