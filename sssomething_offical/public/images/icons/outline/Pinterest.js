import * as React from "react";

function SvgPinterest(props) {
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
        d="M8.571 18.857l3.429-8m-3.698 3.429A3.416 3.416 0 017.429 12v-.571a4 4 0 014-4h1.142a4 4 0 014 4V12a3.429 3.429 0 01-3.428 3.429 2.378 2.378 0 01-2.257-1.627l-.029-.088M12 20a8 8 0 110-16 8 8 0 010 16z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgPinterest;
