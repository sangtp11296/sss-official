import * as React from "react";

function SvgBin(props) {
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
        d="M8.143 6.657V4.943c0-.631.512-1.143 1.143-1.143h4.571c.631 0 1.143.512 1.143 1.143v1.714M3 7.23h17.143m-15.429 0v11.428c0 .631.512 1.143 1.143 1.143h11.429c.63 0 1.143-.512 1.143-1.143V7.23m-6.858.557v8m-3.428-8V13.5M15 7.786V13.5"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgBin;
