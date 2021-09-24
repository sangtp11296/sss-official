import * as React from "react";

function SvgSchool(props) {
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
        d="M12 12.533a.533.533 0 100 1.067.533.533 0 000-1.067z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8 10.604L12.533 8.47V7.2h3.2V4h-4.266v4.47L7.2 10.604v1.93H5.067v6.4H4V20h6.4v-4.267h3.2V20H20v-1.067h-1.067v-6.4H16.8v-1.93zm1.067 8.33V13.6H16.8v5.333h1.067zm-10.667 0H6.133V13.6H7.2v5.333zm3.2-5.867a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0z"
        fill="currentColor"
      />
      <path d="M12.533 20v-3.2h-1.066V20h1.066z" fill="currentColor" />
    </svg>
  );
}

export default SvgSchool;
