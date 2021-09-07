import * as React from "react";

function SvgCart(props) {
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
        d="M4.047 4L3 4.314 6.395 15.63h12.971V8.527a2.732 2.732 0 00-2.731-2.731H4.585L4.047 4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.986 16.722a1.639 1.639 0 100 3.278 1.639 1.639 0 000-3.278zm-.546 1.64a.546.546 0 111.093-.001.546.546 0 01-1.093 0zM16.635 16.722a1.639 1.639 0 100 3.278 1.639 1.639 0 000-3.278zm-.547 1.64a.546.546 0 111.093-.001.546.546 0 01-1.093 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCart;
