import * as React from "react";

function SvgFlagAlt(props) {
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
        d="M18.035 10.42l.223.448a.5.5 0 00.034-.876l-.258.429zM7 3.8l.257-.429A.5.5 0 006.5 3.8H7zm11.292 6.192L7.257 3.372l-.514.857 11.034 6.62.515-.857zM6.5 3.8v12.138h1V3.8h-1zm.724 12.585l11.034-5.517-.447-.895-11.035 5.518.448.894zM7.5 19.8v-3.862h-1V19.8h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFlagAlt;
