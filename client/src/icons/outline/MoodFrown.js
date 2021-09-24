import * as React from "react";

function SvgMoodFrown(props) {
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
        d="M9.512 15.132l-.423.265.53.848.424-.266-.53-.847zm5.564-.411l.5.035.069-.998-.5-.035-.069.998zm-5.033 1.258a8.389 8.389 0 015.033-1.258l.07-.998a9.39 9.39 0 00-5.634 1.409l.531.847zM8 10.214h1.143v-1H8v1zm6.857 0H16v-1h-1.143v1zM12 19.5A7.5 7.5 0 014.5 12h-1a8.5 8.5 0 008.5 8.5v-1zm7.5-7.5a7.5 7.5 0 01-7.5 7.5v1a8.5 8.5 0 008.5-8.5h-1zM12 4.5a7.5 7.5 0 017.5 7.5h1A8.5 8.5 0 0012 3.5v1zm0-1A8.5 8.5 0 003.5 12h1A7.5 7.5 0 0112 4.5v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoodFrown;
