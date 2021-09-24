import * as React from "react";

function SvgDrops(props) {
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
        d="M8.545 13.818c-.242 1.334.219 4 4 4M12.183 4c2.06 1.697 6.182 6.036 6.182 9.818 0 4.728-4 6.182-6.182 6.182C10 20 6 18.546 6 13.818 6 10.036 10.121 5.697 12.182 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgDrops;
