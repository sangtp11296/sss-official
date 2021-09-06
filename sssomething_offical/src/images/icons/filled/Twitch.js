import * as React from "react";

function SvgTwitch(props) {
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
        d="M4.533 4A.533.533 0 004 4.533v11.734c0 .294.239.533.533.533h2.134v2.667a.533.533 0 00.88.405l3.584-3.072h5.136a.533.533 0 00.377-.156l3.2-3.2c.1-.1.156-.236.156-.377V4.533A.533.533 0 0019.467 4H4.533zm10.134 8.533V7.2h1.066v5.333h-1.066zm-3.2-5.333v5.333h1.066V7.2h-1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTwitch;
