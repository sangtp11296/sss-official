import * as React from "react";

function SvgWand(props) {
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
        d="M14.614 4v2.154h-1.077V4h1.077zm-4.848.853l1.84 1.838-.762.762-1.839-1.838.761-.762zm9.38.762l-1.84 1.838-.76-.762 1.838-1.838.762.762zM8.15 9.383h2.154v1.077H8.151V9.383zm9.695 0H20v1.077h-2.154V9.383zm-6.24 3.768L4.76 19.99 4 19.227l6.844-6.84.762.763zm5.7-.762l1.84 1.838-.762.762-1.839-1.838.762-.762zm-2.692 1.3v2.153h-1.077v-2.154h1.077z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWand;
