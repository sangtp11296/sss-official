import * as React from "react";

function SvgYoutube(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.172 12l-1.705 1.34v-2.68L13.172 12z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.607 4.798a25.996 25.996 0 0112.787 0C19.33 5.035 20 6.011 20 7.141v9.718c0 1.13-.67 2.106-1.607 2.342a25.994 25.994 0 01-12.786 0C4.669 18.965 4 17.988 4 16.86V7.14c0-1.13.67-2.106 1.607-2.343zm5.622 4.164a.465.465 0 00-.547-.031.652.652 0 00-.282.554v5.03c0 .232.108.445.282.554.173.11.383.098.547-.03l3.2-2.516a.665.665 0 00.238-.523c0-.21-.09-.406-.238-.523l-3.2-2.515z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgYoutube;
