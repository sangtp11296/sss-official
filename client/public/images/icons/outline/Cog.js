import * as React from "react";

function SvgCog(props) {
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
        clipRule="evenodd"
        d="M10.026 3.8l-.099.5-.376 1.827a6.314 6.314 0 00-1.64.942l-1.839-.615-.494-.153-.256.44-1.266 2.117L3.8 9.3l.375.328 1.423 1.21c-.052.317-.118.63-.118.963 0 .332.066.646.118.962l-1.423 1.21-.375.329.256.44 1.266 2.117.256.442.494-.154 1.84-.615a6.313 6.313 0 001.64.942l.375 1.828.099.499h3.558l.099-.5.375-1.827a6.312 6.312 0 001.64-.942l1.839.615.494.154.257-.442 1.265-2.116.257-.442-.376-.328-1.422-1.21c.052-.316.117-.63.117-.962 0-.333-.065-.646-.117-.962l1.422-1.21.376-.329-.257-.44-1.265-2.117-.257-.441-.494.153-1.839.615a6.313 6.313 0 00-1.64-.942l-.375-1.828-.1-.499h-3.557z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M14.092 11.8a2.287 2.287 0 01-4.574 0 2.287 2.287 0 014.574 0z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgCog;
