import * as React from "react";

function SvgArchive(props) {
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
        d="M9.143 13.143h5.714M4 4h16v4.571H4V4zm1.143 4.571v10.286c0 .631.512 1.143 1.143 1.143h11.428c.632 0 1.143-.512 1.143-1.143V8.571H5.143z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgArchive;
