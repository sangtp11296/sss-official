import * as React from "react";

function SvgChurch(props) {
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
        d="M11.467 6.133V4h1.066v2.133h2.134V7.2h-2.134v2.357l7.198 4.113-.529.926-1.335-.763v5.1H20V20h-5.333v-5.333H9.333V20H4v-1.067h2.133v-5.1l-1.335.763-.53-.926 7.199-4.113V7.2H9.333V6.133h2.134z"
        fill="currentColor"
      />
      <path d="M10.4 20h3.2v-4.267h-3.2V20z" fill="currentColor" />
    </svg>
  );
}

export default SvgChurch;
