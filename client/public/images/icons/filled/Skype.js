import * as React from "react";

function SvgSkype(props) {
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
        d="M4 8.754a4.753 4.753 0 017.23-4.058 6.94 6.94 0 01.77-.047A7.351 7.351 0 0119.35 12c0 .265-.018.522-.046.771a4.754 4.754 0 01-6.534 6.533 6.894 6.894 0 01-.77.047A7.35 7.35 0 014.65 12c0-.265.018-.522.045-.77A4.73 4.73 0 014 8.753zm6.4 1.646c0-.59.478-1.067 1.067-1.067h.94c.53 0 1.013.3 1.25.772l.953-.477a2.463 2.463 0 00-2.203-1.361h-.94a2.133 2.133 0 100 4.266h1.066a1.067 1.067 0 010 2.134h-.94a1.396 1.396 0 01-1.25-.772l-.953.477a2.463 2.463 0 002.203 1.361h.94a2.133 2.133 0 100-4.266h-1.066c-.59 0-1.067-.478-1.067-1.067z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSkype;
