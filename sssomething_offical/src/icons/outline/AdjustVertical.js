import * as React from "react";

function SvgAdjustVertical(props) {
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
        d="M12.467 17.333V20M17.8 4v2.667M7.133 4v6.933m0 2.134V20m5.334-4.8V4M17.8 8.8V20M15.667 8.8h4.266V6.667h-4.266V8.8zm-5.334 8.533H14.6V15.2h-4.267v2.133zM5 13.067h4.267v-2.134H5v2.134z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgAdjustVertical;
