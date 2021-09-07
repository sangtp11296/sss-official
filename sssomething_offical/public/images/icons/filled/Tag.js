import * as React from "react";

function SvgTag(props) {
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
        d="M14.667 8.8a.533.533 0 111.066 0 .533.533 0 01-1.066 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.623 4.156c.1-.1.236-.156.377-.156h6.4A1.6 1.6 0 0120 5.6V12a.533.533 0 01-.156.377l-7.467 7.467a.533.533 0 01-.754 0l-7.467-7.467a.533.533 0 010-.754l7.467-7.467zM15.2 7.2a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTag;
