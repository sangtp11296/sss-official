import * as React from "react";

function SvgXSmall(props) {
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
        d="M15.538 15.972L8.035 8.47 8.504 8l7.503 7.503-.469.47z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.504 7.788l7.715 7.715-.681.681L7.822 8.47l.682-.681zm0 .424l-.257.257 7.291 7.291.257-.257-7.291-7.29z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.035 15.531l7.503-7.503.469.469L8.504 16l-.47-.469z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.22 8.497l-7.716 7.715-.682-.681 7.716-7.716.681.682zm-.425 0l-.257-.257-7.291 7.291.257.257 7.29-7.291z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgXSmall;
