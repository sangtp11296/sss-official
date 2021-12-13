import * as React from "react";

function SvgStarSmall(props) {
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
        d="M12 15.687L8.539 17.6l.661-4.053-2.8-2.87 3.87-.59L12 6.4l1.73 3.687 3.87.59-2.8 2.87.661 4.053L12 15.687z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStarSmall;
