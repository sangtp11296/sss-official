import * as React from "react";

function SvgLifebuoy(props) {
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
        d="M9.764 9.01L6.733 5.978a8.001 8.001 0 0110.534 0L14.236 9.01a3.736 3.736 0 00-4.472 0zM14.99 9.764c.991 1.322.991 3.15 0 4.472l3.032 3.031a8.001 8.001 0 000-10.534L14.99 9.764zM14.236 14.99c-1.322.991-3.15.991-4.472 0l-3.031 3.032a8.001 8.001 0 0010.534 0l-3.031-3.032zM9.01 9.764a3.736 3.736 0 000 4.472l-3.032 3.031a8.001 8.001 0 010-10.534l3.032 3.03z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLifebuoy;
