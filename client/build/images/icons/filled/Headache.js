import * as React from "react";

function SvgHeadache(props) {
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
        d="M15.719 8.363c-2.442-2.337-7.096-1.675-8.756.914-.945 1.473-.453 3.547-.814 4.415-.243 1.065-.847 1.065-1.149 1.674 0 .457.512.588.755.762.36.258.604.95.604 1.827 0 .876.279 1.756 1.811 1.37 1.45-.365 1.86.459 1.966 1.177.04.273.258.498.534.498h4.643c.345 0 .585-.344.489-.675-1.056-3.622.9-3.955 1.577-6.024.718-2.191.063-4.331-1.66-5.938z"
        fill="currentColor"
      />
      <path
        d="M13.815 6.222l.563-1.407L15 5.5l.785-2.093.845 1.408M12.245 5.486l-.291-1.142h.814l-.609-1.743 1.12.14"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgHeadache;
