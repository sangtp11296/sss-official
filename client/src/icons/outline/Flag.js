import * as React from "react";

function SvgFlag(props) {
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
        d="M19.248 3.8l.457.203a.5.5 0 00-.457-.703v.5zM3.8 3.8v-.5a.5.5 0 00-.5.5h.5zm15.448 9.931v.5a.5.5 0 00.457-.703l-.457.203zm-2.207-4.966l-.457-.203a.5.5 0 000 .407l.457-.204zM19.248 3.3H3.8v1h15.448v-1zM3.3 3.8v9.931h1V3.8h-1zm.5 10.431h15.448v-1H3.8v1zm15.905-.703l-2.207-4.966-.914.407 2.207 4.965.914-.406zm-2.207-4.56l2.207-4.965-.914-.406-2.207 4.965.914.407zM4.3 19.8v-6.069h-1V19.8h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFlag;
