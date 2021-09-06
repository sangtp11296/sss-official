import * as React from "react";

function SvgCreditCard(props) {
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
        d="M18.4 6A1.6 1.6 0 0120 7.6v1.6H4V7.6A1.6 1.6 0 015.6 6h12.8z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10.267v5.866a1.6 1.6 0 001.6 1.6h12.8a1.6 1.6 0 001.6-1.6v-5.866H4zm2.133 4.266h6.4v-1.066h-6.4v1.066zm11.734 0h-3.2v-1.066h3.2v1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCreditCard;
