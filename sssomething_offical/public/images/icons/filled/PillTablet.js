import * as React from "react";

function SvgPillTablet(props) {
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
        d="M12 5a7 7 0 100 14 7 7 0 000-14zm4.662 4.347a.5.5 0 00-.574-.82l-8.75 6.126a.5.5 0 00.574.82l8.75-6.126z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPillTablet;
