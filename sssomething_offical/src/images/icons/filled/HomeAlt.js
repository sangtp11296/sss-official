import * as React from "react";

function SvgHomeAlt(props) {
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
        d="M12.257 3.8L5.4 10.657v8c0 .631.512 1.143 1.143 1.143H17.97c.632 0 1.143-.512 1.143-1.143v-8L12.257 3.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeAlt;
