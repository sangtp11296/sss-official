import * as React from "react";

function SvgCar(props) {
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
        d="M21.667 10.662v8.005c0 .736-.597 1.333-1.334 1.333H19a1.333 1.333 0 01-1.333-1.333v-1.334H7v1.334C7 19.403 6.403 20 5.667 20H4.333A1.333 1.333 0 013 18.667v-8.005l2.835-4.721A4 4 0 019.264 4h6.139a4 4 0 013.429 1.941l2.835 4.721zm-15.334.505h12v-1h-12v1zm-1.333 4h4v-1H5v1zm14.667-1h-4v1h4v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCar;
