import * as React from "react";

function SvgId(props) {
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
        d="M4 7.6A1.6 1.6 0 015.6 6h12.8A1.6 1.6 0 0120 7.6v8.533a1.6 1.6 0 01-1.6 1.6H5.6a1.6 1.6 0 01-1.6-1.6V7.6zm3.2 2.667a2.133 2.133 0 114.267 0 2.133 2.133 0 01-4.267 0zm9.6 0h-3.2V9.2h3.2v1.067zm0 3.2h-3.2V12.4h3.2v1.067zm-7.467 0a3.122 3.122 0 00-2.792 1.726l-.351.702a.533.533 0 00.477.772H12a.533.533 0 00.477-.772l-.351-.702a3.122 3.122 0 00-2.793-1.726z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgId;
