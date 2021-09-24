import * as React from "react";

function SvgMessenger(props) {
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
        d="M4 11.675C4 7.415 7.604 4 12 4s8 3.414 8 7.675c0 4.261-3.604 7.676-8 7.676a8.285 8.285 0 01-2.902-.522l-2.39 1.12a.533.533 0 01-.741-.622l.56-2.06C4.98 15.87 4 13.886 4 11.674zm9.084 1.538l3.524-2.937-.683-.819-2.876 2.397-2.108-1.582-4.05 2.894.62.868 3.415-2.44 2.158 1.62z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessenger;
