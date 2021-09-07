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
        d="M12 5l.34-.367a.5.5 0 00-.694.014L12 5zm-.34.368l3.793 3.5.678-.735-3.792-3.5-.678.735zm-.014-.721l-3.5 3.5.708.707 3.5-3.5-.708-.707zM11.5 5v11.084h1V5h-1zM6 19.5h12v-1H6v1zM19.5 18v-6.583h-1V18h1zm-14 0v-6.583h-1V18h1zM18 19.5a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-12-1a.5.5 0 01-.5-.5h-1A1.5 1.5 0 006 19.5v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUpload;
