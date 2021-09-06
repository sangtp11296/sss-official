import * as React from "react";

function SvgWalletAlt(props) {
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
        d="M4 7.286V17.57c0 .632.512 1.143 1.143 1.143h13.714c.631 0 1.143-.511 1.143-1.143V8.43c0-.632-.512-1.143-1.143-1.143h-12M4 7.286V6.143C4 5.512 4.512 5 5.143 5h9.143c.63 0 1.143.512 1.143 1.143v1.143H6.857M4 7.286h2.857m6.857 6.857h3.429"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgWalletAlt;
