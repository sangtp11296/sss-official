import * as React from "react";

function SvgMoodSad(props) {
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
        d="M8.171 14.557l-.3.4.8.6.3-.4-.8-.6zm6.858.6l.3.4.8-.6-.3-.4-.8.6zM12 19.5A7.5 7.5 0 014.5 12h-1a8.5 8.5 0 008.5 8.5v-1zm7.5-7.5a7.5 7.5 0 01-7.5 7.5v1a8.5 8.5 0 008.5-8.5h-1zM12 4.5a7.5 7.5 0 017.5 7.5h1A8.5 8.5 0 0012 3.5v1zm0-1A8.5 8.5 0 003.5 12h1A7.5 7.5 0 0112 4.5v-1zm-4 6.714h1.143v-1H8v1zm6.857 0H16v-1h-1.143v1zm.972 4.343c-1.915-2.552-5.743-2.552-7.658 0l.8.6c1.515-2.019 4.543-2.019 6.058 0l.8-.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoodSad;
