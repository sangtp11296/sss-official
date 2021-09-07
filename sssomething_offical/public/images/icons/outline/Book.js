import * as React from "react";

function SvgBook(props) {
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
        d="M5 3.6v-.5a.5.5 0 00-.5.5H5zm0 15.6h-.5a.5.5 0 00.5.5v-.5zM8.1 3v18h1V3h-1zM5 4.1h12v-1H5v1zM18.9 6v10.8h1V6h-1zM17 18.7H5v1h12v-1zm-11.5.5V3.6h-1v15.6h1zm13.4-2.4a1.9 1.9 0 01-1.9 1.9v1a2.9 2.9 0 002.9-2.9h-1zM17 4.1c1.05 0 1.9.85 1.9 1.9h1A2.9 2.9 0 0017 3.1v1zm-5.4 4.8h4.8v-1h-4.8v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBook;
