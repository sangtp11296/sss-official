import * as React from "react";

function SvgCartPlus(props) {
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
        d="M3 4.314L4.047 4l.538 1.796h12.05a2.732 2.732 0 012.731 2.731v7.103H6.395L3 4.313zm8.718 9.13V11.26H9.533v-1.093h2.185V7.981h1.093v2.185h2.185v1.093H12.81v2.185h-1.093zM7.348 18.361a1.639 1.639 0 113.277 0 1.639 1.639 0 01-3.277 0zm1.638-.546a.546.546 0 100 1.092.546.546 0 000-1.092zM14.996 18.361a1.639 1.639 0 113.278 0 1.639 1.639 0 01-3.278 0zm1.639-.546a.546.546 0 100 1.092.546.546 0 000-1.092z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCartPlus;
