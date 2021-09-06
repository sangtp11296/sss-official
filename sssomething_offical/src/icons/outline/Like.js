import * as React from "react";

function SvgLike(props) {
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
        d="M7.943 5.69c1.253 1.81.224 4.073-.448 4.978-1.79 1.811-2.014 6.337-.447 8.374 1.566 2.037 8.057.227 8.952 0 .896-.226 1.567-.905 1.12-1.584 1.119-1.131 0-1.584 0-2.263.895-.905.447-2.037 0-2.942.895-3.169-3.805-1.585-6.267-1.585 1.119-2.263-.109-4.275-.78-5.633-.672-1.358-3.697-1.609-2.13.654z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgLike;
