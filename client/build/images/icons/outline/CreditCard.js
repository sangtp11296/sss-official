import * as React from "react";

function SvgCreditCard(props) {
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
        d="M4 9.429h16M5.714 14h6.857m2.286 0h3.429M4 7.143v9.143c0 .63.512 1.143 1.143 1.143h13.714c.631 0 1.143-.512 1.143-1.143V7.143C20 6.512 19.488 6 18.857 6H5.143C4.512 6 4 6.512 4 7.143z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgCreditCard;
