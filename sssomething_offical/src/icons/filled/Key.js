import * as React from "react";

function SvgKey(props) {
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
        d="M10.921 9.04a4.04 4.04 0 111.563 3.19L9.11 15.604l1.662 1.663-.714.714-1.663-1.662-1.305 1.305 1.663 1.663-.715.714-1.662-1.663L4.714 20 4 19.286l7.77-7.77a4.022 4.022 0 01-.849-2.477zm4.04-3.03a3.03 3.03 0 100 6.059 3.03 3.03 0 000-6.06z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgKey;
