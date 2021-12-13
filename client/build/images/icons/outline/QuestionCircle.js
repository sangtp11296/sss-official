import * as React from "react";

function SvgQuestionCircle(props) {
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
        d="M12 13.714V12h.571c.947 0 1.715-.768 1.715-1.714v-.115a1.6 1.6 0 00-1.6-1.6H12c-.947 0-1.714.768-1.714 1.715m1.143 5.143h1.142M12 19.998a8 8 0 110-16 8 8 0 010 16z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgQuestionCircle;
