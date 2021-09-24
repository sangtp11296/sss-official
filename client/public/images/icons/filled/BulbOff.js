import * as React from "react";

function SvgBulbOff(props) {
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
        d="M9.686 21.5h4.091v-1h-4.09v1zM7.048 10.146l.014-.096a4.717 4.717 0 019.339 0l.014.096a4.706 4.706 0 01-.94 3.563c-.543.7-1.016 1.499-1.016 2.384v2.18H9.004v-2.18c0-.885-.473-1.684-1.015-2.384a4.706 4.706 0 01-.94-3.563z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBulbOff;
