import * as React from "react";

function SvgSun(props) {
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
        d="M12.505 3.5v2.143h-1V3.5h1zm-7.362.936l1.851 1.85-.707.707-1.85-1.85.706-.707zm14.431.707l-1.851 1.85-.707-.708 1.851-1.85.707.708zM3.5 11.5h2.144v1H3.5v-1zm14.867 0h2.143v1h-2.143v-1zM6.994 17.715l-1.85 1.85-.708-.708 1.851-1.85.707.707zm10.729-.708l1.851 1.85-.707.707-1.85-1.85.706-.707zm-5.218 1.35V20.5h-1v-2.143h1zM15.436 12a3.43 3.43 0 01-3.43 3.429 3.43 3.43 0 110-6.858A3.43 3.43 0 0115.435 12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSun;
