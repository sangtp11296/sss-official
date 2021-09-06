import * as React from "react";

function SvgUpload(props) {
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
        d="M11.646 4.646a.5.5 0 01.693-.013l3.792 3.5-.678.734L12.5 6.142v9.941h-1V6.207L8.854 8.854l-.708-.708 3.5-3.5zM5.5 11.416V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-6.583h1V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-6.583h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUpload;
