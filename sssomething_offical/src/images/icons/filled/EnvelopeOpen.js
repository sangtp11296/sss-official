import * as React from "react";

function SvgEnvelopeOpen(props) {
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
        d="M11.206 4.21a1.6 1.6 0 011.588 0l6.4 3.658c.168.096.314.22.434.364L12 12.3 4.372 8.232c.12-.144.266-.268.434-.364l6.4-3.657z"
        fill="currentColor"
      />
      <path
        d="M4 9.243v8.995a1.6 1.6 0 001.6 1.6h12.8a1.6 1.6 0 001.6-1.6v-8.98-.015l-8 4.266-8-4.266z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEnvelopeOpen;
