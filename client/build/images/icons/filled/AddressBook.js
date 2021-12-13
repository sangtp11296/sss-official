import * as React from "react";

function SvgAddressBook(props) {
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
        d="M7.5 5A1.5 1.5 0 006 6.5V9H5v1h1v5H5v1h1v2.5A1.5 1.5 0 007.5 20h9a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0016.5 5h-9zm2.5 5a2 2 0 114 0 2 2 0 01-4 0zm-1 6a3 3 0 116 0v1H9v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAddressBook;
