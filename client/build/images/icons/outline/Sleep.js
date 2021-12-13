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
        d="M6 6.286h3.429L6 10.857h3.429M11.571 13.143h5.715L11.57 20h5.715M15 4h2.286L15 7.429h2.286"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgSleep;
