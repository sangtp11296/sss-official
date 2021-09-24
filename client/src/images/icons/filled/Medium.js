import * as React from "react";

function SvgMedium(props) {
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
        d="M4 5.6A1.6 1.6 0 015.6 4h12.8A1.6 1.6 0 0120 5.6v12.8a1.6 1.6 0 01-1.6 1.6H5.6A1.6 1.6 0 014 18.4V5.6zm4.267 3.733H7.2V8.267h1.6c.175 0 .33.083.427.213L12 12.178l2.766-3.688a.533.533 0 01.434-.223h1.6v1.066h-1.067v5.334H16.8v1.066h-3.2v-1.066h1.067V10.4L12 13.956 9.333 10.4v4.267H10.4v1.066H7.2v-1.066h1.067V9.333z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMedium;
