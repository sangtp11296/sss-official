import * as React from "react";

function SvgHospital(props) {
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
        d="M12.239 3.556a.533.533 0 00-.478 0l-6.39 3.195a.533.533 0 00-.304.482v11.2H4V19.5h5.333v-5.333h5.334V19.5H20v-1.067h-1.067v-11.2a.533.533 0 00-.305-.482l-6.39-3.195zm-.772 5.277V6.7h1.066v2.133h2.134V9.9h-2.134v2.133h-1.066V9.9H9.333V8.833h2.134z"
        fill="currentColor"
      />
      <path d="M13.6 19.5v-4.267h-3.2V19.5h3.2z" fill="currentColor" />
    </svg>
  );
}

export default SvgHospital;
