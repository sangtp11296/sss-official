import * as React from "react";

function SvgDownload(props) {
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
        d="M12 16.083l-.34.368a.5.5 0 00.694-.014L12 16.083zm.34-.367l-3.793-3.5-.678.735 3.792 3.5.678-.735zm.014.72l3.5-3.5-.708-.706-3.5 3.5.708.707zM11.5 5v11.083h1V5h-1zM6 20.083h12v-1H6v1zm13.5-1.5V12h-1v6.583h1zm-14 0V12h-1v6.583h1zm12.5 1.5a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-12-1a.5.5 0 01-.5-.5h-1a1.5 1.5 0 001.5 1.5v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDownload;
