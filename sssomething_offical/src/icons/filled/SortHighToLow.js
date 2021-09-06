import * as React from "react";

function SvgSortHighToLow(props) {
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
        d="M8.81 18.793V4h1v14.793l2.457-2.457.707.707-3.31 3.31a.5.5 0 01-.707 0l-3.31-3.31.707-.707 2.456 2.457zm7.725-13.741h-1.156v-1h1.656a.5.5 0 01.5.5v6.12h1.155v1h-3.31v-1h1.155v-5.62zm-2.207 9.982c0-1.19.965-2.155 2.155-2.155h.95c1.231 0 2.1 1.206 1.711 2.373l-1.635 4.906-.949-.316.884-2.652h-.961a2.155 2.155 0 01-2.155-2.156zm3.45 1.156l.417-1.254a.803.803 0 00-.762-1.057h-.95a1.155 1.155 0 000 2.31h1.294z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSortHighToLow;
