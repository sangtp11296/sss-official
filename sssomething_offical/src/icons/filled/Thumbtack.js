import * as React from "react";

function SvgThumbtack(props) {
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
        d="M13.308 5.374l-.605-.605.77-.769L20 10.527l-.77.77-.604-.605-4.848 7.757.782.782-.769.769-4.51-4.511L4.768 20 4 19.23l4.511-4.51L4 10.209l.77-.77.781.783 7.757-4.848z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgThumbtack;
