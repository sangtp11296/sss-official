import * as React from "react";

function SvgMoodSurprised(props) {
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
        d="M8 9.714h1.143m5.714 0H16M12 20a8 8 0 110-16 8 8 0 010 16zm-.571-8h1.142a1.714 1.714 0 110 3.429H11.43a1.714 1.714 0 110-3.429z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgMoodSurprised;
