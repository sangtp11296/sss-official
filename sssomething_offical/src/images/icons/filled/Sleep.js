import * as React from "react";

function SvgSleep(props) {
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
        d="M5.5 6.286a.5.5 0 01.5-.5h4.429L7 10.357h2.429a.5.5 0 110 1H5l3.429-4.571H6a.5.5 0 01-.5-.5zM11.071 13.143a.5.5 0 01.5-.5h6.782L12.64 19.5h4.647a.5.5 0 110 1h-6.782l5.714-6.857h-4.647a.5.5 0 01-.5-.5zM14.5 4a.5.5 0 01.5-.5h3.22l-2.286 3.429h1.352a.5.5 0 010 1h-3.22L16.352 4.5H15a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSleep;
