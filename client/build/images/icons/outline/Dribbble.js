import * as React from "react";

function SvgDribbble(props) {
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
        d="M8.959 4.599c3.824 4.619 5.824 9.053 6.52 14.607M4.036 11.223c6.84-.158 10.745-1.237 13.681-4.818M6.514 17.823c3.682-5.603 8.196-6.457 13.434-4.908M20 12a8 8 0 10-16 0 8 8 0 0016 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgDribbble;
