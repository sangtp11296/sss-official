import * as React from "react";

function SvgLocation(props) {
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
        d="M12 4v16m8-8.005H4m14.857 0c0 3.784-3.07 6.862-6.857 6.862-3.786 0-6.857-3.078-6.857-6.862A6.856 6.856 0 0112 5.142a6.856 6.856 0 016.857 6.853z"
        stroke="currentColor"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default SvgLocation;
