import * as React from "react";

function SvgAppointments(props) {
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
        d="M16.8 6.133h1.6a1.6 1.6 0 011.6 1.6V18.4a1.6 1.6 0 01-1.6 1.6H5.6A1.6 1.6 0 014 18.4V7.733a1.6 1.6 0 011.6-1.6h1.6V4h1.067v2.133h7.466V4H16.8v2.133zm-6.4 6.4H7.2v-1.066h3.2v1.066zm6.4-1.066h-3.2v1.066h3.2v-1.066zm-6.4 4.266H7.2v-1.066h3.2v1.066zm3.2 0h3.2v-1.066h-3.2v1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAppointments;
