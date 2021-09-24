import * as React from "react";

function SvgSlack(props) {
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
        d="M15.429 12v-1.714A1.714 1.714 0 1117.143 12h-1.714zm0 0H12m3.429 0V5.714a1.714 1.714 0 10-3.429 0V12m0 0V8.571M12 12H5.714a1.714 1.714 0 110-3.429H12M12 12h6.286a1.714 1.714 0 110 3.429H12M12 12v3.429M12 12H8.571M12 12v6.286a1.714 1.714 0 11-3.429 0V12M12 8.571V6.857a1.714 1.714 0 10-1.714 1.714H12zm0 6.858h1.714A1.714 1.714 0 1112 17.143v-1.714zM8.571 12v1.714A1.714 1.714 0 116.857 12h1.714z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgSlack;
