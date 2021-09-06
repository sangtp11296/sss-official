import * as React from "react";

function SvgMessageX(props) {
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
        d="M4 5.6C4 4.714 4.716 4 5.6 4h12.8c.884 0 1.6.715 1.6 1.6v9.593c0 .884-.716 1.6-1.6 1.6h-3.981l-1.975 2.96a.533.533 0 01-.888 0l-1.975-2.96H5.6c-.884 0-1.6-.716-1.6-1.6V5.599zm9.756 7.844L12 11.688l-1.756 1.756-.754-.755 1.756-1.756L9.49 9.177l.754-.754L12 10.179l1.756-1.756.755.754-1.757 1.756 1.757 1.757-.755.754z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessageX;
