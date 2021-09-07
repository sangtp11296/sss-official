import * as React from "react";

function SvgEnvelopeOpen(props) {
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
        d="M4 8.97l8 4 8-4m0 .091v9.623c0 .63-.512 1.143-1.143 1.143H5.143A1.143 1.143 0 014 18.684V9.06c0-.41.22-.789.576-.992l6.857-3.918c.351-.201.783-.201 1.134 0l6.857 3.918c.356.203.576.582.576.992z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgEnvelopeOpen;
