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
        d="M8.571 8.571L12 13.143l3.429-4.572m-6.858 0H6.857m1.714 0V16m6.858-7.429h1.714m-1.714 0V16m-8.572-.571h3.429m3.428 0h3.429M5.143 4h13.714C19.488 4 20 4.512 20 5.143v13.714c0 .631-.512 1.143-1.143 1.143H5.143A1.143 1.143 0 014 18.857V5.143C4 4.512 4.512 4 5.143 4z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgMedium;
