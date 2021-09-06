import * as React from "react";

function SvgCompass(props) {
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
        d="M9.993 14.007l1.338-2.676 2.676-1.338-1.338 2.676-2.676 1.338z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm11.677-2.961a.533.533 0 00-.716-.716l-4.266 2.133a.533.533 0 00-.239.239L8.323 14.96a.533.533 0 00.716.716l4.266-2.133a.533.533 0 00.239-.239l2.133-4.266z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCompass;
