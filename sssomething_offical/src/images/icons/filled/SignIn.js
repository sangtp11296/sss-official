import * as React from "react";

function SvgSignIn(props) {
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
        d="M12 4.5h6.583a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H12v-1h6.583a.5.5 0 00.5-.5V6a.5.5 0 00-.5-.5H12v-1zm.937 3.646l3.5 3.5a.5.5 0 01.014.693l-3.5 3.792-.735-.678L14.94 12.5H5v-1h9.876L12.23 8.854l.707-.708z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSignIn;
