import * as React from "react";

function SvgFilterSmall(props) {
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
        d="M10.077 16.016c0 .207.166.375.372.375h3.075a.373.373 0 00.373-.375v-2.297h-3.82v2.297zM16.3 8H7.673a.375.375 0 00-.322.563l2.593 4.406h4.088l2.593-4.406A.376.376 0 0016.3 8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFilterSmall;
