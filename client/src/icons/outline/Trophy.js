import * as React from "react";

function SvgTrophy(props) {
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
        d="M8.25 21h8.5m-4.25 0v-6.071m0 0a4.857 4.857 0 004.857-4.858V5.214c0-.67-.543-1.214-1.214-1.214H8.857c-.67 0-1.214.544-1.214 1.214v4.857A4.857 4.857 0 0012.5 14.93zm-4.857-8.5H6.429a2.429 2.429 0 000 4.857h1.214m9.714-4.857h1.214a2.429 2.429 0 110 4.857h-1.214"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgTrophy;
