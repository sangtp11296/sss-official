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
        d="M12.276 8.966l4.414 2.206V20H7.862v-8.828l4.414-2.206zm0 0V4M4 20h16.552M5.655 20v-6.62h2.207M18.897 20v-6.62H16.69M11.172 20v-3.31h2.207V20M12.276 4.552h3.31v2.207h-3.31m0 7.724a1.103 1.103 0 110-2.207 1.103 1.103 0 010 2.207z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgSchool;
