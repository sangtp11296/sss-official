import * as React from "react";

function SvgInstagram(props) {
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
        d="M12 9.333a2.667 2.667 0 100 5.334 2.667 2.667 0 000-5.334z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.8 4A4.8 4.8 0 004 8.8v6.4A4.8 4.8 0 008.8 20h6.4a4.8 4.8 0 004.8-4.8V8.8A4.8 4.8 0 0015.2 4H8.8zm-.533 8a3.733 3.733 0 117.466 0 3.733 3.733 0 01-7.466 0zm7.466-3.733H16.8V7.2h-1.067v1.067z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgInstagram;
