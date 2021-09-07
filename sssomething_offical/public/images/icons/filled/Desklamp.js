import * as React from "react";

function SvgDesklamp(props) {
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
        d="M11.498 4.622l2.092 2.092a5.052 5.052 0 015.526 1.087c.3.3.3.787 0 1.088l-6.357 6.357c-.3.3-.787.3-1.088 0a5.052 5.052 0 01-1.086-5.527L9.492 8.627l-3.198 4.112 6.151 6.151h5.875V20H6.11v-1.11h4.765l-5.712-5.713a.555.555 0 01-.046-.733L8.7 7.836l-.208-.209a2.125 2.125 0 013.005-3.005z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDesklamp;
