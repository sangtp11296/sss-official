import * as React from "react";

function SvgBriefcaseAlt(props) {
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
        d="M9.714 6.857v-.571a2.286 2.286 0 114.572 0v.571M4 10.857c4.235 4.84 11.765 4.84 16 0M5.143 7.43h13.714c.631 0 1.143.511 1.143 1.142v10.286c0 .631-.512 1.143-1.143 1.143H5.143A1.143 1.143 0 014 18.857V8.571c0-.63.512-1.142 1.143-1.142z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgBriefcaseAlt;
