import * as React from "react";

function SvgHeart(props) {
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
        d="M5.183 12.898L12 19.714l6.817-6.816a4.04 4.04 0 00-5.715-5.715L12 8.286l-1.102-1.103a4.04 4.04 0 00-5.715 5.715z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHeart;
