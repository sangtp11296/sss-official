import * as React from "react";

function SvgMoodLaugh(props) {
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
        d="M12 15.667c-1.33 0-2.381-.891-2.617-2.134h5.234c-.236 1.243-1.288 2.134-2.617 2.134z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm4.267-1.6h1.066V9.333H8.267V10.4zm.533 2.067a.533.533 0 00-.533.533c0 2.102 1.631 3.733 3.733 3.733 2.102 0 3.733-1.631 3.733-3.733a.533.533 0 00-.533-.533H8.8zm6.933-2.067h-1.066V9.333h1.066V10.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoodLaugh;
