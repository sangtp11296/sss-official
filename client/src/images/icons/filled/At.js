import * as React from "react";

function SvgAt(props) {
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
        d="M3.5 12a8.5 8.5 0 0117 0v1.143a2.784 2.784 0 01-2.786 2.786 2.786 2.786 0 01-2.532-1.624A3.929 3.929 0 1115.929 12v1.143a1.786 1.786 0 003.571 0V12a7.5 7.5 0 10-3.215 6.156l.573.82A8.5 8.5 0 013.5 12zm11.429 0a2.929 2.929 0 10-5.858 0 2.929 2.929 0 005.858 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAt;
