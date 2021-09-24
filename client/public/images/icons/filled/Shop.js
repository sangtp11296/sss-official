import * as React from "react";

function SvgShop(props) {
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
        d="M19 6H6V5h13v1zM6.01 7.402A.5.5 0 016.5 7h12a.5.5 0 01.49.402l1 5a.5.5 0 01-.49.598h-14a.5.5 0 01-.49-.598l1-5zM6 14v5H5v1h15v-1h-1v-5h-2v2H8v-2H6z"
        fill="currentColor"
      />
      <path d="M9 14h7v1H9v-1z" fill="currentColor" />
    </svg>
  );
}

export default SvgShop;
