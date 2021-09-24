import * as React from "react";

function SvgSlack(props) {
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
        d="M15.077 11.385h-2.462V5.23a1.23 1.23 0 112.462 0v6.154zM17.538 11.385h-1.23v-1.231a1.23 1.23 0 111.23 1.23zM18.77 12.615h-6.155v2.462h6.154a1.23 1.23 0 100-2.462zM12.615 17.538v-1.23h1.231a1.23 1.23 0 11-1.23 1.23zM5.23 8.923h6.155v2.462H5.23a1.23 1.23 0 110-2.462zM11.385 6.462v1.23h-1.231a1.23 1.23 0 111.23-1.23zM5.23 13.846c0-.68.552-1.23 1.232-1.23h1.23v1.23a1.23 1.23 0 01-2.461 0zM8.923 18.77v-6.155h2.462v6.154a1.23 1.23 0 11-2.462 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSlack;
