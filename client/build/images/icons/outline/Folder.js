import * as React from "react";

function SvgFolder(props) {
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
        d="M4 17.571V6.143C4 5.512 4.512 5 5.143 5h4.571L12 7.286h6.857c.631 0 1.143.511 1.143 1.143v9.142c0 .632-.512 1.143-1.143 1.143H5.143A1.143 1.143 0 014 17.571z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgFolder;
