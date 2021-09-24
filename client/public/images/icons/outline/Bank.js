import * as React from "react";

function SvgBank(props) {
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
        d="M11.571 4l.224-.447a.5.5 0 00-.447 0L11.57 4zM3 20.5h17.143v-1H3v1zm8.348-16.947L4.49 6.98l.447.895 6.857-3.429-.447-.894zM3 10.214h17.143v-1H3v1zm15.652-3.233l-6.857-3.428-.447.894 6.857 3.429.447-.895zm-9.866 5.59v4.572h1V12.57h-1zm4.571 0v4.572h1V12.57h-1zM4.214 9.714V20h1V9.714h-1zm13.715 0V20h1V9.714h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBank;
