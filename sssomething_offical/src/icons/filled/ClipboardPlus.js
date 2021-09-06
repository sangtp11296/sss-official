import * as React from "react";

function SvgClipboardPlus(props) {
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
        d="M8.2 4h7.467v1.067h3.2V18.4a1.6 1.6 0 01-1.6 1.6H6.6A1.6 1.6 0 015 18.4V5.067h3.2V4zm1.067 1.067H14.6v1.6a.533.533 0 01-.533.533H9.8a.533.533 0 01-.533-.533v-1.6zM11.4 15.733V13.6H9.267v-1.067H11.4V10.4h1.067v2.133H14.6V13.6h-2.133v2.133H11.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClipboardPlus;
