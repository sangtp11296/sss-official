import * as React from "react";

function SvgCream(props) {
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
        d="M7.4 19.489h1.543a4 4 0 002.603-.963l8.634-7.401a1 1 0 00.056-1.466l-4.895-4.895a1 1 0 00-1.466.056l-7.4 8.634a4 4 0 00-.964 2.604V17.6M7.4 19.489l-.442.589a1 1 0 01-1.507.107l-.636-.636a1 1 0 01.107-1.508l.59-.441M7.4 19.489L5.511 17.6M6.267 13.822l4.91 4.911M12.689 6.267l6.044 6.044"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgCream;
