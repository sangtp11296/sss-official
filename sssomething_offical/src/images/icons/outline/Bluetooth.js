import * as React from "react";

function SvgBluetooth(props) {
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
        d="M12.857 20h-.5a.5.5 0 00.787.41l-.287-.41zm0-16l.287-.41a.5.5 0 00-.787.41h.5zm5.714 4l.282.413a.5.5 0 00.005-.823l-.287.41zm0 8l.287.41a.5.5 0 00-.005-.823l-.282.413zm-5.214 4v-8.104h-1V20h1zm0-8.104V4h-1v7.896h1zM12.57 4.41l5.715 4 .573-.82-5.714-4-.574.82zm5.72 3.177l-5.714 3.896.563.826 5.714-3.896-.563-.826zm-5.714 3.896l-6.858 4.675.564.826 6.857-4.675-.563-.826zm.568 8.927l5.714-4-.573-.82-5.715 4 .574.82zm5.71-4.823L6.281 7.015l-.564.827 12.572 8.571.563-.826z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBluetooth;
