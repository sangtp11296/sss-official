import * as React from "react";

function SvgDelivery(props) {
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
        d="M8.561 16.436h-.965a1 1 0 01-1-1v-6.97a1 1 0 011-1h7.58a1 1 0 011 1v6.97a1 1 0 01-1 1h-4.404"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M20.105 16.436h1.228v-2.114a5.158 5.158 0 00-5.158-5.158v0"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M17.65 16.436h-2.211" stroke="currentColor" />
      <path
        d="M5.123 9.891H2.667M5.123 11.83H3.158M5.123 13.77H3.649"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.517 16.679c0 .52-.43.954-.973.954a.964.964 0 01-.974-.954c0-.521.43-.955.974-.955s.973.434.973.955zM19.85 16.679c0 .52-.429.954-.973.954a.964.964 0 01-.974-.954c0-.521.43-.955.974-.955s.974.434.974.955z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgDelivery;
