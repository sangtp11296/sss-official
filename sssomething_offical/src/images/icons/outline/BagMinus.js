import * as React from "react";

function SvgBagMinus(props) {
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
        d="M8.295 8v-.571a3.429 3.429 0 116.857 0V8m-6.286 6.286h5.714M5.896 10.73l-.889 8A1.143 1.143 0 006.143 20h11.16c.682 0 1.212-.592 1.136-1.27l-.889-8a1.143 1.143 0 00-1.135-1.016H7.032c-.582 0-1.072.438-1.136 1.017z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgBagMinus;
